import { getDatabase } from "./database.js";

/**
 * Gets all student data from the database.
 *
 * @returns an array of all student data in the database
 */
export async function getStudents() {
  const db = await getDatabase();
  const students = await db.all("SELECT * FROM Students");
  return students;
}
