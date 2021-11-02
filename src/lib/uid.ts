const CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function generateUid(length = 6): string {
  let uid = "";
  for(let i = 0; i < length; i++){
    uid += CHARS[Math.floor(Math.random() * CHARS.length + 1)];
  }
  return uid;
}