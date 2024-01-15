import express from "express";
import { getStudents } from "../../data/students-dao.js";
import { getStudentCourseData, updateGrade } from "../../data/student-courses-dao.js";

const router = express.Router();

/**
 * On a GET request to /api/students, returns all student data as JSON with a 200 OK response.
 */
router.get("/", async (req, res) => {
  return res.json(await getStudents());
});

/**
 * On a GET request to /api/students/:studentId/course-data, returns an array of all course data
 * for that student, if the student exists. If not, returns a 404 response.
 */

// TODO Step 2.1: Add route handler for GET requests to /:studentId/course-data

/**
 * On a PATCH request to /api/students/:studentId/course-data/:studentCourseId, updates the given grade
 * for the given student.
 *
 * studentId must be a valid student id, and studentCoruseId must be a valid student course data id, and
 * that student course data must correspond to that student. The grade must be a valid grade.
 *
 * If all conditions are met, the grade will be updated and a 204 will be returned. If not,
 * a 404 will be returned (if the student or student grade entry doesn't exist), or a 422 will be returned
 * (if the new grade is missing or invalid).
 */

// TODO Step 3.2: Add route handler for PATCH requests to /:studentId/course-data/:studentCourseId
// TODO Step 4: Catch validation errors to return 422 response.

export default router;
