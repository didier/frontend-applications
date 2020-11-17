<script>
  import { horizontalScrollWidth, scrollY } from '../meta/store'

  // Bind variable `scene` to the DOM reference of the div
  let scene

  // set the width in the store
  const setWidth = () => {
    requestAnimationFrame(() => ($horizontalScrollWidth = scene.scrollWidth))
  }
</script>

<style lang="scss">
  div {
    --scroll: 0px;
    overflow: visible;
    white-space: nowrap;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    /* For every 1px srolled, translate by -1px */
    transform: translateX(var(--scroll));
    transition: all 0.2s var(--ease-out);

    :global(*) {
      white-space: normal;
    }
  }
</style>

<svelte:window on:resize={setWidth} on:load={setWidth} />

<div
  bind:this={scene}
  class="horizonal-scene"
  style="--scroll: -{$scrollY}px; --column-gap: 0px;"
>
  <slot />
</div>
