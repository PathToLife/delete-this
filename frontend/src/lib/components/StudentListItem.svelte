<script>
  export let student;
</script>

<li>
  <a href={`/students/${student.id}`}>
    <div class="container">
      <img src={student.imageUrl} alt={`${student.name} portrait`} />
      <span>{student.name}</span>
    </div>
  </a>
</li>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }

  .container {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    background-color: rgb(146, 255, 162);
    padding: 5px;
    border-radius: 48px;
  }

  .container > img {
    width: 96px;
    background-color: aliceblue;
    border-radius: 48px;
    box-shadow: 2px 2px 4px rgb(214, 214, 240);
  }
</style>
