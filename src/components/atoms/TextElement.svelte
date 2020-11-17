<script>
  import Container from '../meta/Container.svelte'
</script>

<style lang="scss">
  div {
    --width: 100vw;
    --px: var(--step-2);
    --py: 0;
    padding: var(--py) var(--px);

    :global(*) {
      max-width: 100vw;
      width: calc(var(--width) - var(--px) * 2);
    }
  }
</style>

<div>
  <slot>Hello world</slot>
</div>
