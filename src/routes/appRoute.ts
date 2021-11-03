import path from 'path';
import express from 'express';
const router = express.Router();

router.get('/stats/:uid',(req,res) => {
  // will fetch data
  // will return template
});

router.get("/", (_, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

router.use("/", express.static(path.resolve("./public")));


export default router;