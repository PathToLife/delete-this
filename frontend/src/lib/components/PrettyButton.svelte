<script>
  export let disabled = false;
</script>

<button on:click {disabled}><slot /></button>

<style>
  button {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    padding: 12px 24px;
    border: 0;
    border-radius: 24px;
    background: #2196f3;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 14px;
    transition: background 0.3s ease-out, color 0.3s ease-out;
    will-change: background, color;
    cursor: pointer;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.26);
    outline: none;
  }

  button:hover:not([disabled]) {
    background: #1976d2;
  }
  button:active:not([disabled]) {
    background: #1976d2;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  }

  button[disabled] {
    background-color: rgba(0, 0, 0, 0.4);
    color: rgba(232, 230, 230, 0.4);
  }
</style>
