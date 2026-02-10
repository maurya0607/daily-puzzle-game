import { getAuth } from "firebase-admin/auth";

export async function verifyUser(token) {
  const decoded = await getAuth().verifyIdToken(token);
  return decoded;
}
