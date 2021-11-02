import express from "express";
const app = express();

app.use(express.json());

app.post("/api/shorten", (req, res) => {
  const { url } = req.body;
  if (!url) throw { status: 400, message: "Missing url param" };
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status);
    res.send({
      error: err.message,
    });
  }
});

export default app;
