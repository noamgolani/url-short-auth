import request from 'supertest';
import app from '../src/app'

describe("POST /api/shorten " ,()=>{
	test("Should validate the url body param",async ()=> {
		const response = await request(app).post('/api/shorten');
		expect(response.statusCode).toBe(400);
		expect(response.body.error).toBe("Missing url param");
	})

})
