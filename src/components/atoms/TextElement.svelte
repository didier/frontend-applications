<script>
  export let center = false
  let width
  let height
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
    display: grid;
  }

  .center {
    place-items: center;
    grid-gap: 0;
    @media screen and (min-width: 65ch) {
      text-align: center;
    }
  }
</style>

<div class:center bind:clientWidth={width} bind:clientHeight={height}>
  <slot>Hello world</slot>
</div>
