const { Router } = require('express');
const ProductController = require('./controllers/ProductController')


const router = new Router();


router.get('/products', ProductController.all)
router.get('/products/:id', ProductController.one)
router.put('/products/:id', ProductController.update)
router.post('/products', ProductController.save)
router.delete('/products/:id', ProductController.delete)

module.exports = router;
