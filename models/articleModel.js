const db = require('../db');

exports.createArticle = (article, callback) => {
    const { titre, contenu, auteur, categorie, tags, date } = article;
    db.run(
        `INSERT INTO articles (titre, contenu, auteur, categorie, tags, date)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [titre, contenu, auteur, categorie, tags, date],
        function(err) {
            callback(err, { id: this.lastID });
        }
    );
};

exports.getAllArticles = (limit, offset, callback) => {
    db.all(
        `SELECT * FROM articles LIMIT ? OFFSET ?`,
        [limit, offset],
        callback
    );
};

exports.countArticles = (callback) => {
    db.get(`SELECT COUNT(*) AS total FROM articles`, [], callback);
};

exports.getArticleById = (id, callback) => {
    db.get(`SELECT * FROM articles WHERE id = ?`, [id], callback);
};

exports.updateArticle = (id, article, callback) => {
    const { titre, contenu, categorie, tags } = article;
    db.run(
        `UPDATE articles SET titre=?, contenu=?, categorie=?, tags=? WHERE id=?`,
        [titre, contenu, categorie, tags, id],
        callback
    );
};

exports.deleteArticle = (id, callback) => {
    db.run(`DELETE FROM articles WHERE id=?`, [id], callback);
};

exports.searchArticles = (query, callback) => {
    db.all(
        `SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?`,
        [`%${query}%`, `%${query}%`],
        callback
    );
};