import * as SQLite from "expo-sqlite";

console.log(SQLite);

const db = await SQLite.openDatabaseAsync("spacesmatch");

// export const initDatabase = async () => {
//   await db.execAsync(`
//     CREATE TABLE IF NOT EXISTS user (
//       user_id INTEGER PRIMARY KEY AUTOINCREMENT,
//       user_username TEXT UNIQUE NOT NULL,
//       user_latest_play TEXT
//     );
//   `);
//   await db.execAsync(`
//     CREATE TABLE IF NOT EXISTS score (
//       score_id INTEGER PRIMARY KEY AUTOINCREMENT,
//       score_points INTEGER NOT NULL,
//       score_registered_on TEXT DEFAULT (datetime('now')),
//       user_id INTEGER,
//       FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
//     );
//   `);
// };

// export const addUser = async (username, latestPlay) => {
//   try {
//     await db.runAsync(
//       `INSERT INTO user (user_username, user_latest_play) VALUES (?, ?);`,
//       [username, latestPlay]
//     );
//   } catch (error) {
//     console.error("❌ Error inserting user:", error);
//   }
// };

// export const addScore = async (points, userId) => {
//   try {
//     await db.runAsync(
//       `INSERT INTO score (score_points, user_id) VALUES (?, ?);`,
//       [points, userId]
//     );
//   } catch (error) {
//     console.error("❌ Error inserting score:", error);
//   }
// };

// export const getLeaderboard = async () => {
//   try {
//     return await db.getAllAsync(
//       `SELECT u.user_username, MAX(s.score_points) AS bestScore 
//        FROM score s
//        JOIN user u ON s.user_id = u.user_id
//        GROUP BY u.user_id
//        ORDER BY bestScore DESC;`
//     );
//   } catch (error) {
//     console.error("❌ Error fetching leaderboard:", error);
//     return [];
//   }
// };

// export const getUserScores = async (userId) => {
//   try {
//     return await db.getAllAsync(
//       `SELECT * FROM score WHERE user_id = ? ORDER BY score_registered_on DESC;`,
//       [userId]
//     );
//   } catch (error) {
//     console.error("❌ Error fetching scores:", error);
//     return [];
//   }
// };

// export const getLatestScore = async (setLatestScore) => {
//   try {
//     const result = await db.getFirstAsync(
//       `SELECT s.score_points, u.user_username, s.score_registered_on
//        FROM score AS s
//        INNER JOIN user AS u ON s.user_id = u.user_id
//        ORDER BY s.score_registered_on DESC
//        LIMIT 1;`
//     );
//     if (result) {
//       setLatestScore(result);
//     }
//   } catch (error) {
//     console.error("❌ Error fetching latest score:", error);
//   }
// };