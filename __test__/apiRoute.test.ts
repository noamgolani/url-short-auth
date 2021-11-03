import app from "../src/app";
import request from "supertest";
import { clearDB, initDB} from '../src/lib/dummyDB'

describe("POST /api/shorten", () => {
	test("should throw error if no url", async () => {
		const res = await request(app).post("/api/shorten");
		expect(res.statusCode).toBe(400);
	});

	test("should throw error if url invalid", async () => {
		const res = await request(app).post("/api/shorten").send({url: "www.google"});
		expect(res.statusCode).toBe(400);
	});

	test("should return shortUrl and uid", async () => {
		const res = await request(app).post("/api/shorten").send({url: "http://www.google.com/a"});
		expect(res.statusCode).toBe(200);
    const {shortUrl , uid} = res.body;
    expect(shortUrl).toBeDefined();
    expect(uid).toBeDefined();
    expect(uid.length).toBe(6);
	});
});

beforeAll((done)=>{
  clearDB().then(()=>{
    return initDB()
  }).then(done);
});