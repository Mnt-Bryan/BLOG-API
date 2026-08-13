const model = require('../models/articleModel');

exports.create = (req, res, next) => {
    model.createArticle(req.body, (err, result) => {
        if (err) return next(err);
        res.status(201).json(result);
    });
};

exports.getAll = (req, res, next) => {
    model.getAllArticles((err, rows) => {
        if (err) return next(err);
        res.json(rows);
    });
};

exports.getOne = (req, res, next) => {
    model.getArticleById(req.params.id, (err, row) => {
        if (err) return next(err);
        if (!row) return res.status(404).json({ message: "Not found" });
        res.json(row);
    });
};

exports.update = (req, res, next) => {
    model.updateArticle(req.params.id, req.body, (err) => {
        if (err) return next(err);
        res.json({ message: "Updated" });
    });
};

exports.delete = (req, res, next) => {
    model.deleteArticle(req.params.id, (err) => {
        if (err) return next(err);
        res.json({ message: "Deleted" });
    });
};

exports.search = (req, res, next) => {
    model.searchArticles(req.query.query, (err, rows) => {
        if (err) return next(err);
        res.json(rows);
    });
};