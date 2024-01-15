import { getDatabase } from "./database.js";
import yup from "yup";

/**
 * Gets an array of all course data for the given student.
 *
 * @param {*} studentId the student id. Will be converted to a number using parseInt().
 * @returns an array of all course data for the given student, or an empty array if
 *          that student doesn't exist.
 */
export async function getStudentCourseData(studentId) {
  const db = await getDatabase();
  const courseData = await db.all(
    "SELECT * FROM StudentCourses WHERE studentId = ?",
    parseInt(studentId)
  );
  return courseData;
}

// An array of all valid grades. Used for validation logic (Step 4).
const VALID_GRADES = ["D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];

/**
 * Updates the grade for a student.
 *
 * @param {*} updateData the update data. Should match udpateGradeSchema above.
 * @returns true if the grade was updated, false otherwise.
 * @throws an error if updateData does not conform to udpateGradeSchema.
 */
export async function updateGrade(updateData) {
  // TODO Step 3.1: Complete this function.
  // TODO Step 4: Add validation logic.
}
