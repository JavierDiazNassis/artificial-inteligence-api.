import express from "express";
import multer from "multer";
import { postUser, uploadImages, searchPicture, isUser, getAllUsers } from "../controllers/userController";
const userRoutes = express.Router();

userRoutes.post("/user", postUser);

const upload = multer({ storage: multer.memoryStorage() });

userRoutes.post("/user/image", upload.array("files", 100), uploadImages);
userRoutes.post("/user/findById", upload.array("file",100), searchPicture);

userRoutes.get("/user",  isUser);
userRoutes.get("/users", getAllUsers);

export default userRoutes;
