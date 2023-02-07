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

router.route('/:usersId').post(addThought);

router.route('/:thoughtsId/reactions').post(addReaction);

router.route('/:thoughtsId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;