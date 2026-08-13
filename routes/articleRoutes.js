const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');
const { articleValidationRules, validate } = require('../middlewares/validators');

router.post('/', articleValidationRules, validate, controller.create);
router.get('/', controller.getAll);
router.get('/search', controller.search);
router.get('/:id', controller.getOne);
router.put('/:id', articleValidationRules, validate, controller.update);
router.delete('/:id', controller.delete);

module.exports = router;