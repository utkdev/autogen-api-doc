let users = require("../data/users.json");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - phone
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         phone:
 *           type: number
 *           description: User's contact number
 *         address:
 *           type: string
 *           description: User's address
 *       example:
 *         id: d5fE_asz
 *         phone: 8899002234
 *         address: Whitefield, Bangalore
 */

/**
 * @swagger
 *  tags:
 *    name: Users
 *    description: Users service
 */

/**
 * @swagger
 * /users:
 *   get:
 *     description: Get users list
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '404':
 *         description: Not found
 */
router.get('/users', (req, res) => {
    res.json(users)
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */
router.get("/users/:id", (req, res) => {
  const user = users.find(({ id }) => `${id}` === req.params.id);

  if(!user){
    res.sendStatus(404)
  }

  res.json(user);
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */

router.delete("/users/:id", (req, res) => {
    const oldLen = users.length;

	users = users.filter(({ id }) => `${id}` !== req.params.id);

    if (oldLen > users.length) {
        return res.sendStatus(200);
    }

    res.sendStatus(404)
});

module.exports = router;
