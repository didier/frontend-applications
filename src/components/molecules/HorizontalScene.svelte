<script>
  import { horizontalScrollWidth, scrollY } from '../meta/store'

  // Bind variable `scene` to the DOM reference of the div
  let scene

  // set the width in the store
  const setWidth = () => {
    requestAnimationFrame(() => ($horizontalScrollWidth = scene.scrollWidth))
  }
</script>

<style>
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
    gap: 64px;
    /* For every 1px srolled, translate by -1px */
    transform: translateX(var(--scroll));
    transition: all 0.2s var(--ease-out);
  }
</style>

<svelte:window on:resize={setWidth} on:load={setWidth} />

<div bind:this={scene} class="horizonal-scene" style="--scroll: -{$scrollY}px">
  <slot />
</div>
