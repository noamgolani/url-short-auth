import express from "express";
import validUrl from "valid-url";
import { addUrl, getUrl, updateStats } from "./lib/dummyDB";
import generateUid from "./lib/uid";
const app = express();

app.use(express.json());

app.post("/api/shorten", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) throw { status: 400, message: "Missing url param" };
    if (!validUrl.isUri(url)) throw { status: 400, message: "Not a url" };

    const uid = await generateUid();
    addUrl(uid, url);
    res.status(200);

    res.send({ shortUrl: `http://localhost:3000/${uid}` });
    res.end();
  } catch (error) {
    next(error);
  }
});

app.get("/:uid", async (req, res) => {
  const { uid } = req.params;
  const url = await getUrl(uid);
  updateStats(uid);
  res.redirect(url);
});

app.use((err, req, res, _) => {
  if (err.status) {
    res.status(err.status);
    res.send({
      error: err.message,
    });
  } else {
    console.log(err);
    res.status(500);
    res.send({ error: "Internal server error" });
  }

  res.end();
});

export default app;
