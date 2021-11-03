import path from 'path';
import express from 'express';
const router = express.Router();

router.use("/", express.static(path.resolve("./public")));

router.get("/", (_, res) => {
  res.sendFile(path.resolve("./public/index.html"));
  res.end();
});

export default router;