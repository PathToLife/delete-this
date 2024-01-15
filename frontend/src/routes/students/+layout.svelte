<script>
  import StudentListItem from "$lib/components/StudentListItem.svelte";
  export let data;
</script>

<svelte:head>
  <title>Student course data</title>
</svelte:head>

<div class="container">
  <nav>
    <ul>
      {#each data.students as student (student.id)}
        <StudentListItem {student} />
      {/each}
    </ul>
  </nav>
  <main>
    <slot />
  </main>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
  }

  nav > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
</style>
