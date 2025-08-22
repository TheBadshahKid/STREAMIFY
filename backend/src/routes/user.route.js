import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const userId = req.auth.userId;
  res.send(`User route with GET method for user ${userId}`);
});

export default router;