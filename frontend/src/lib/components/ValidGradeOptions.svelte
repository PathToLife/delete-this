<script>
  const VALID_GRADES = ["D-", "D", "D+", "C-", "C", "C+", "B-", "B", "B+", "A-", "A", "A+"];
</script>

{#each VALID_GRADES as grade}
  <option value={grade}>{grade}</option>
{/each}
