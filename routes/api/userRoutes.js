const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controller/userController');

router.route('/').get(getAllUsers).post(createUsers);

// router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;