const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  tags:
 *  - User:
 *    name: Users
 *    description: Manages user apis
 */

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get users list
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: A success response
 */
router.get('/users', (req, res) => {
    res.send('Api docs users')
});

/**
 * @swagger
 * /user:
 *   post:
 *     description: Add user
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: User successfully added
 */
router.post('/user', (req, res) => {
    res.json({
        uidx: 12,
    })
});

module.exports = router;
