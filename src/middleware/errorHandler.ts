export default function (err, req, res, _) {
  if (typeof err.status === 'number') {
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
