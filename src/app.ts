import express from 'express';
const app = express();

app.get('/',(req,res) => {
	res.send("Start");
})

export default app;
