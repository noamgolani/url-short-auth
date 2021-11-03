import dotenv from "dotenv";
import app from './app';

dotenv.config();
import { initDB } from './lib/dummyDB';

const port = process.env.PORT || 3000;

initDB();

app.listen(port, ()=>{
	console.log('Listening');
})
