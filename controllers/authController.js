const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    if (username !== process.env.ADMIN_USERNAME || password !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
        { username },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );

    res.json({ token });
};