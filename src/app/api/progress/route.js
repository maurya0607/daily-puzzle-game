 import pool from "@/lib/postgres";

export async function POST(req) {
  const { userId, email, name, provider, puzzleType, score } = await req.json();

  // 1️⃣ Ensure user exists
  await pool.query(
    `
    INSERT INTO users (id, email, name, provider)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (id) DO NOTHING
    `,
    [userId, email, name, provider]
  );

  // 2️⃣ Insert progress
  await pool.query(
    `
    INSERT INTO game_progress
    (user_id, puzzle_date, puzzle_type, score, completed)
    VALUES ($1, CURRENT_DATE, $2, $3, true)
    `,
    [userId, puzzleType, score]
  );

  return Response.json({ success: true });
}
