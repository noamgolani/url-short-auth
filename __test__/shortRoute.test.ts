import app from "../src/app";
import request from "supertest";
import {getUrlData, clearDB, initDB} from '../src/lib/dummyDB';

describe("GET /", () => {
	test("should redirect to the /app", async () => {
		const res = await request(app).get("/");
		expect(res.statusCode).toBe(302);
		const nextUrl = res.header.location;
		expect(nextUrl).toBe("/app");
	});
});

describe("GET /:uid", () => {
	test("should redirect to the correct url", async () => {
		const testNext = "http://www.google.com/abc";
		const { uid } = (
			await request(app).post("/api/shorten").send({ url: testNext })
		).body;
		const res = await request(app).get(`/${uid}`);
		expect(res.statusCode).toBe(302);
		const nextUrl = res.header.location;
		expect(nextUrl).toBe(testNext);
	});

	test("should redirect to /app if uid not exists", async ()=>{
		const response = await request(app).get(`/BADUID!!!`);
		expect(response.statusCode).toBe(302);
		const nextUrl = response.header.location;
		expect(nextUrl).toBe("/app");
	});

	test("should store data about the redirect request", async ()=>{
		const testNext = "http://www.google.com/a";
		const { uid } = (
			await request(app).post("/api/shorten").send({ url: testNext })
		).body;
		let urlData = await getUrlData(uid);
		const initialCount = urlData.redirectCount;
		await request(app).get(`/${uid}`);
		urlData = await getUrlData(uid);
		const afterCount = urlData.redirectCount;
		expect(afterCount).toBe(initialCount + 1);
		
	});
});

beforeAll((done)=>{
  clearDB().then(()=>{
    return initDB()
  }).then(done);
});