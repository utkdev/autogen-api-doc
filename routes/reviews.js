const reviews = require("../data/reviews.json");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 *  tags:
 *    name: Reviews
 *    description: Reviews Service
 */

/**
 * @swagger
 * /reviews/{userId}:
 *   get:
 *     description: Get reviews by user id
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The list of the reviews
 *       404:
 *         description: No reviews found
 */
router.get('/reviews/:userId', (req, res) => {
    const filteredReviews = reviews.filter(({ userId }) => `${userId}` === req.params.userId);

    if (filteredReviews.length > 0) {
        return res.json(filteredReviews)
    }

    res.sendStatus(404)
});

module.exports = router;
