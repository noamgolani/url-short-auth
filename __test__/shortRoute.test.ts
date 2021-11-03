import app from "../src/app";
import request from "supertest";
import {getUrlData} from '../src/lib/dummyDB';

describe("GET /", () => {
	test("should redirect to the /app", async () => {
		const res = await request(app).get("/");
		expect(res.statusCode).toBe(302);
		const nextUrl = res.header.location;
		expect(nextUrl).toBe("/app");
	});
});

describe.skip("GET /:uid", () => {
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

	test("should store data about the redirect request", async ()=>{
		const testNext = "http://www.google.com/abc";
		const { uid } = (
			await request(app).post("/api/shorten").send({ url: testNext })
		).body;
		const initialCount = (await getUrlData(uid)).redirectCount;
		await request(app).get(`/${uid}`);
		const afterCount = (await getUrlData(uid)).redirectCount;
		expect(afterCount).toBe(initialCount + 1);
		
	});
});
