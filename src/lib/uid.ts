import { isUnique } from "./dummyDB";

const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default async function generateUid(length = 6): Promise<string> {
  let uid = "";
  for(let i = 0; i < length; i++){
    uid += CHARS[Math.floor(Math.random() * CHARS.length + 1)];
  }
  if(await isUnique(uid)) return uid;
  else return await generateUid();
}