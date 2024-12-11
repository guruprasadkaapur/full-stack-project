import express from 'express';
import {
   
    getUsers,
    getUserFriends,
   addRemoveUser,
} from '../controllers/users.js';
import {verifyToken} from '../middleware/auth.js';

const router = express.Router();

/* READ */

router.get('/:id', verifyToken, getUsers);
router.get('/:id/friends', verifyToken, getUserFriends);



/* UPDATE */

router.put('/:id/friendid', verifyToken, addRemoveUser);

export default router;