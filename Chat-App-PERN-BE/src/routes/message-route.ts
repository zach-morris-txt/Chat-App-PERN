import express from "express";
const router = express.Router();

router.get("/conversations", (req, res) => {
    res.send("Conversation route");
});

router.get("/abc", (req, res) => {
    res.send("");
});

router.get("/def", (req, res) => {
    res.send("");
});



export default router;