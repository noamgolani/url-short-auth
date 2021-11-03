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

  test("should serve static files from the public folder", async ()=> {
    const publicCont = await fs.readdir('./public');
    for(const file of publicCont) {
      const res = await request(app).get(`/app/${file}`);
      expect(res.statusCode).toBe(200);
    }
  });
});