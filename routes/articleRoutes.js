const express = require('express');
const router = express.Router();
const controller = require('../controllers/articleController');
const { articleValidationRules, validate } = require('../middlewares/validators');
const { requireAuth } = require('../middlewares/auth');

router.post('/', requireAuth, articleValidationRules, validate, controller.create);
router.get('/', controller.getAll);
router.get('/search', controller.search);
router.get('/:id', controller.getOne);
router.put('/:id', requireAuth, articleValidationRules, validate, controller.update);
router.delete('/:id', requireAuth, controller.delete);

module.exports = router;