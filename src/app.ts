import express from "express";
import validUrl from 'valid-url';
import generateUid from "./lib/uid";
const app = express();

app.use(express.json());

app.post("/api/shorten", (req, res) => {
  const { url } = req.body;
  if (!url) throw { status: 400, message: "Missing url param" };
	if(!validUrl.isUri(url)) throw {status: 400, message: "Not a url"};

	const uid = generateUid();
	res.status(200)
	res.send({shortUrl: `http://www.google.com/${uid}`})
	res.end();
	
});

app.use((err, req, res,_) => {
  if (err.status) {
    res.status(err.status);
    res.send({
      error: err.message,
    });
  } else {
		console.log(err);
		res.status(500);
		res.send({error: "Internal server error"})
	}

	res.end();
});

export default app;
