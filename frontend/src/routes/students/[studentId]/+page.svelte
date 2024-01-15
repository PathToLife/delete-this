<script>
  import CourseDataView from "$lib/components/CourseDataView.svelte";
  import { STUDENTS_URL } from "$lib/js/api-urls.js";
  export let data;

  /**
   * Sends a PATCH request to ${STUDENTS_URL}/:studentId/course-data/:courseDataId with the proposed
   * new grade in the request body.
   *
   * Displays an alert to the user if the response code indicates an error.
   *
   * @param e contains the courseDataId and the grade.
   */
  async function handleSaveCourseData(e) {
    const { courseDataId, grade } = e.detail;
    const requestBody = { grade };

    // TODO Step 3.3: Appropriately call your "update grade" API route on your backend. Display an alert to
    // the user if the returned status code is anything other than 204.

  }
</script>

<h1>Student info - {data.student.name}</h1>
<div class="container">
  {#each data.courseData as course (course.id)}
    <CourseDataView {course} on:updateGrade={(e) => handleSaveCourseData(e)} />
  {/each}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 40px;
  }
</style>
