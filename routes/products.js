const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  tags:
 *  - Products:
 *    name: Products
 *    description: Manages products apis
 */

/**
 * @swagger
 * /products:
 *   get:
 *     description: Get products list
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: A success response
 */
router.get('/products', (req, res) => {
    res.json({
        products: [
            {
                id: '232w32-12dcc-21232',
                name: 'Puma Shoes',
                size: 7,
            },
            {
                id: '902oi-12ui2-2323',
                name: 'Nike Shoes',
                size: 10,
            }
        ]
    })
});

/**
 * @swagger
 * /product:
 *   post:
 *     description: Add product
 *     tags: [Products]
 *     responses:
 *       '200':
 *         description: Product successfully added
 */
router.post('/product', (req, res) => {
    res.json({
        productId: 12,
    })
});

module.exports = router;
