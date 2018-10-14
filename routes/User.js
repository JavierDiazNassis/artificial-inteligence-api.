import express from 'express';
import { postUser } from '../controllers/userController';
const userRoutes = express.Router();

userRoutes.post('/user', postUser);

export default userRoutes;