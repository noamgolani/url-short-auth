import path from 'path';
import express from 'express';
const router = express.Router();

router.get('/stats/:uid',(req,res) => {
  res.render('stats', {title: "testing the pug"});
});

router.get("/", (_, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

router.use("/", express.static(path.resolve("./public")));


export default router;