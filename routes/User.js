import express from "express";
import multer from "multer";
import { postUser, uploadImages } from "../controllers/userController";
const userRoutes = express.Router();

userRoutes.post("/user", postUser);

const upload = multer({ storage: multer.memoryStorage() });

userRoutes.post("/user/image", upload.array('photos', 100), uploadImages);

export default userRoutes;
