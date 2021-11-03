import dotenv from "dotenv";
dotenv.config();
import app from './app';

import { initDB } from './lib/dummyDB';

const port = process.env.PORT || 3000;

initDB();

app.listen(port, ()=>{
	console.log('Listening');
})
