require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const articleRoutes = require('./routes/articleRoutes');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
const setupSwagger = require('./swagger');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/articles', articleRoutes);
app.use('/api/auth', authRoutes);

setupSwagger(app);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});