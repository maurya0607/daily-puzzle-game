// src/db.js
import Dexie from "dexie";

export const db = new Dexie("PuzzleDB");
db.version(1).stores({
  progress: "++id, date, score"
});
