import express from "express";
import { login, logout, signup } from "../controllers/auth-controller";

const router = express.Router();


router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);



export default router;