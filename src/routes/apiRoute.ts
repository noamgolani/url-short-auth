import express from 'express';
import validUrl from 'valid-url';
import { addUrl, getUrlData } from '../lib/dummyDB';

const router = express.Router();

router.post("/shorten", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) throw { status: 400, message: "Missing url param" };
    if (!validUrl.isUri(url)) throw { status: 400, message: "Not a url" };

    const uid = await addUrl(url);
    res.status(200);
    res.send({ shortUrl: `https://sheltered-reef-79501.herokuapp.com/${uid}` });
  } catch (error) {
    next(error);
  }
});

router.get("/stats/:uid", async (req, res, next) => {
  const { uid } = req.params;
  try {
    const data = await getUrlData(uid);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

export default router;
