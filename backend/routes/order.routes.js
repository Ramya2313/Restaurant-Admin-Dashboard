const router = require('express').Router();
const controller = require('../controllers/order.controller');

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrderById);
router.post('/', controller.createOrder);
router.patch('/:id/status', controller.updateOrderStatus);

module.exports = router;
