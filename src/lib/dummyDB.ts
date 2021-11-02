import * as fs from "fs/promises";
import * as fsSync from "fs";

const PATH = "DATA.json";

try {
  fsSync.accessSync(PATH);
} catch {
  fs.writeFile(PATH, JSON.stringify({}));
}

export async function addUrl(uid: string, longUrl: string){
  const content = await fs.readFile(PATH);
  const jsonCont = JSON.parse(content.toString());
  jsonCont[uid] = longUrl;
  await fs.writeFile(PATH, JSON.stringify(jsonCont));
}

export async function getUrl(uid: string): Promise<string> {
  const content = await fs.readFile(PATH);
  const jsonCont = JSON.parse(content.toString());
  return jsonCont[uid];
}