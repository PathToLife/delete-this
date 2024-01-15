import { STUDENTS_URL } from "$lib/js/api-urls.js";

/**
 * Loads data required for /students/:studentId page - the student itself, along with
 * their course data.
 *
 * The student itself is already loaded in the parent layout load, so we get this using await parent().
 *
 * The course data can be obained from /api/students/:studentId/course-data.
 *
 * @returns the student and courseData.
 */
export async function load({ fetch, params, parent }) {
  // Get current student from students list + params.studentId
  const { students } = await parent();
  const studentId = params.studentId;
  const student = students.find((s) => s.id == studentId);

  // TODO Step 2.2: Get course data for this student from your API instead of using empty array.
  const courseData = [];

  return { student, courseData };
}
