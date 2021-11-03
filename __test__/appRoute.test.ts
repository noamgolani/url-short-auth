import request from 'supertest';
import app from '../src/app';
import fs from 'fs/promises';

describe("GET /app", ()=>{
  test("should serve the index.html", async ()=>{
    const res = await request(app).get('/app/');
    const content = await fs.readFile('./public/index.html');
    expect(res.statusCode).toBe(200); 
    expect(res.text).toBe(content.toString())
  })
});