import request from "supertest";
import validUrl from "valid-url";
import app from "../src/app";

describe("POST /api/shorten ", () => {
  test("Should validate the url body param", async () => {
    const response = await request(app).post("/api/shorten");
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Missing url param");
  });

  test("Should validate that the url is url", async () => {
    const response1 = await request(app)
      .post("/api/shorten")
      .send({ url: "Im not a valid url" });
    expect(response1.statusCode).toBe(400);
    expect(response1.body.error).toBe("Not a url");
    const response2 = await request(app)
      .post("/api/shorten")
      .send({ url: "www.google" });
    expect(response2.statusCode).toBe(400);
    expect(response2.body.error).toBe("Not a url");
  });

  test("Should return randomized url shortened value", async () => {
    const response1 = await request(app)
      .post("/api/shorten")
      .send({ url: "http://www.google.com" });
    expect(response1.statusCode).toBe(200);
    const { shortUrl } = response1.body;
    expect(shortUrl).toBeDefined();
    expect(validUrl.isUri(shortUrl)).toBeTruthy();
  });
});
