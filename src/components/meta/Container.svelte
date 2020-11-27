<script>
  // Props
  export let wrap = false
</script>

<style lang="scss">
  .container {
    margin: 0 auto;
    padding: 0 var(--offset);
  }
  .max-width {
    max-width: 65ch;
  }
</style>

<div class="container" class:max-width={wrap}>
  <slot />
</div>
