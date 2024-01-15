import { STUDENTS_URL } from "$lib/js/api-urls.js";

export async function load({ fetch }) {
  // TODO Step 1: fetch students from STUDENTS_URL instead of using empty array.
  const students = [];

  return { students };
}
