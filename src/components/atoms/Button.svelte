<style>
  button {
    appearance: none;
    background: var(--teal-100);
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
  }
</style>

<button on:click>
  <slot />
</button>
