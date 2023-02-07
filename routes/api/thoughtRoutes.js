const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    addThought,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controller/thoughtController');

router.route('/').get(getAllThoughts);

router.route('/:id').get(getOneThought).put(updateThoughts).delete(deleteThoughts);

router.route('/:UserId').post(addThought);

router.route('/:ThoughtId/reactions').post(addReaction);

router.route('/:ThoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;