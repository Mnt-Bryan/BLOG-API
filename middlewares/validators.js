const { body, validationResult } = require('express-validator');

exports.articleValidationRules = [
    body('titre')
        .trim()
        .notEmpty().withMessage('Le titre est requis')
        .isLength({ min: 3 }).withMessage('Le titre doit contenir au moins 3 caractères'),

    body('contenu')
        .trim()
        .notEmpty().withMessage('Le contenu est requis')
        .isLength({ min: 10 }).withMessage('Le contenu doit contenir au moins 10 caractères'),

    body('auteur')
        .trim()
        .notEmpty().withMessage('L\'auteur est requis'),

    body('categorie')
        .optional()
        .trim(),

    body('tags')
        .optional(),
];

exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};