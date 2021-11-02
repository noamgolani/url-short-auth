import express from 'express';

const app = express();

app.get('/',(req,res) => {
	res.send("Start");
})

app.listen(3000, ()=>{
	console.log('Listening');
})
