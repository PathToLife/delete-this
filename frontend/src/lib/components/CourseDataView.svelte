<script>
  import ValidGradeOptions from "$lib/components/ValidGradeOptions.svelte";
  import PrettySelect from "$lib/components/PrettySelect.svelte";
  import PrettyButton from "$lib/components/PrettyButton.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let course;

  let grade = course.grade;
  let isSaveEnabled = false;

  function handleSave() {
    isSaveEnabled = false;
    dispatch("updateGrade", { courseDataId: course.id, grade });
  }
</script>

<div class="container">
  <strong>{course.name}:</strong>
  <PrettySelect bind:value={grade} on:change={() => (isSaveEnabled = true)}>
    <ValidGradeOptions />
  </PrettySelect>
  <PrettyButton disabled={!isSaveEnabled} on:click={handleSave}>Save</PrettyButton>
</div>

<style>
  .container {
    background-color: aliceblue;
    border-radius: 48px;
    box-shadow: 2px 2px 4px rgb(214, 214, 240);
    padding: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
</style>
