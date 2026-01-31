const router = require('express').Router();
const controller = require('../controllers/menu.controller');

router.get('/', controller.getMenu);
router.get('/search', controller.searchMenu);
router.get('/:id', controller.getMenuById);
router.post('/', controller.createMenu);
router.put('/:id', controller.updateMenu);
router.delete('/:id', controller.deleteMenu);
router.patch('/:id/availability', controller.toggleAvailability);

module.exports = router;
