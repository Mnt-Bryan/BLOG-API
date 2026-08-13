exports.errorHandler = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = process.env.NODE_ENV === 'production'
        ? 'Une erreur est survenue sur le serveur'
        : err.message;

    res.status(statusCode).json({
        error: message
    });
};