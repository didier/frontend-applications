<script>
  export let center = false
</script>

<style lang="scss">
  div {
    --width: 100vw;
    --px: var(--step-2);
    --py: 0;
    padding: var(--py) var(--px);
    width: 100vw;

    > :global(*) {
      max-width: calc(65 * 1rem);
    }
  }

  .center {
    display: grid;
    place-items: center;
  }
</style>

<div class:center>
  <slot>Hello world</slot>
</div>
