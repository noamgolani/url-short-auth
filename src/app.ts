import express from "express";
import validUrl from 'valid-url';
const app = express();

app.use(express.json());

app.post("/api/shorten", (req, res) => {
  const { url } = req.body;
  if (!url) throw { status: 400, message: "Missing url param" };
	if(!validUrl.isUri(url)) throw {status: 400, message: "Not a url"};
	else res.send(200)
	res.end();
	
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status);
    res.send({
      error: err.message,
    });
  }

	res.end();
});

export default app;
