import userRoutes from './User';
import express from 'express';

const indexRoutes = express.Router();

indexRoutes.use(userRoutes);

export default indexRoutes;
