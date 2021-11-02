import * as fs from "fs/promises";
import * as fsSync from "fs";

interface urlData {
  url: string,
  redirectCount: number,
  creationDate: Date
}

const PATH = "DATA.json";

try {
  fsSync.accessSync(PATH);
} catch {
  fs.writeFile(PATH, JSON.stringify({}));
}

export async function addUrl(uid: string, longUrl: string) {
  await updateUrlData(uid, {
    url: longUrl,
    redirectCount: 0,
    creationDate: new Date(Date.now()),
  });
}

export async function getUrl(uid: string): Promise<string> {
  return (await getUrlData(uid)).url;
}

async function getUrlData(uid: string):Promise<urlData> {
  const content = await fs.readFile(PATH);
  const jsonCont = JSON.parse(content.toString());
  return jsonCont[uid];
}

export async function updateStats(uid: string) {
  const urlData = await getUrlData(uid);
  urlData.redirectCount = urlData.redirectCount + 1;
  await updateUrlData(uid, urlData);
}

async function updateUrlData(uid: string, urlData: urlData) {
  const content = await fs.readFile(PATH);
  const jsonCont = JSON.parse(content.toString());
  jsonCont[uid] = urlData;
  await fs.writeFile(PATH, JSON.stringify(jsonCont));
}

export async function isUnique(uid: string): Promise<boolean> {
  const content = await fs.readFile(PATH);
  const jsonCont = JSON.parse(content.toString());
  if (Object.keys(jsonCont).includes(uid)) return false;
  return true;
}
