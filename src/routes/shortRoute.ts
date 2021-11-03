
import express from 'express';
const router = express.Router();

import { updateStats, getUrl } from '../lib/dummyDB';

router.get("/:uid", async (req, res, next) => {
  const { uid } = req.params;
  try {
    const url = await getUrl(uid);
    await updateStats(uid);
    res.redirect(url);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req,res) => {
  res.redirect("/app");
})

export default router;
