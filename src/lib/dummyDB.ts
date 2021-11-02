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
  jsonCont[uid] ={url: longUrl};
  await fs.writeFile(PATH, JSON.stringify(jsonCont));
}

export async function getUrl(uid: string): Promise<string> {
  const content = await fs.readFile(PATH);
  const jsonCont = JSON.parse(content.toString());
  return jsonCont[uid].url;
}

export async function isUnique(uid: string): Promise<boolean>{
  const content = await fs.readFile(PATH);
  const jsonCont = JSON.parse(content.toString());
  if(Object.keys(jsonCont).includes(uid)) return false;
  return true;
}