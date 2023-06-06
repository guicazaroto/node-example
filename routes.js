import express from 'express'
import * as productController from './product-controller.js'

const router = express.Router()

router.get('/produtos', productController.index)
router.get('/produtos/:id', productController.get)
router.post('/produtos', productController.create)
router.put('/produtos/:id', productController.update)

export default router