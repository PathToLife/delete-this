<script>
  export let value;
</script>

<div class="select-container">
  <select bind:value on:change class="material-select">
    <slot />
  </select>
</div>

<style>
  .select-container {
    position: relative;
    display: inline-block;
    min-width: 64px;
    padding: 4px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  }

  .material-select {
    font-size: 14px;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    appearance: none;
  }

  .select-container:after {
    position: absolute;
    content: "";
    top: 16px;
    right: 10px;
    width: 0px;
    height: 0px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid #757575;
    pointer-events: none;
  }
</style>
