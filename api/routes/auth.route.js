import express from 'express';
import { test } from '../controller/user.controller.js';
import { signup } from '../controller/auth.controller.js';

const authRouter = express.Router();

authRouter.post('/signup', signup);

export default authRouter;



