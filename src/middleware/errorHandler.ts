export default function (err, req, res, _) {
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
}
