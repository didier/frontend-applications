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
    /* gap: 64px; */
    /* For every 1px srolled, translate by -1px */
    transform: translateX(var(--scroll));
    transition: all 0.2s var(--ease-out);
  }

  /* Flexbox `gap` polyfill */
  /* @source: https://codesandbox.io/s/exciting-saha-pyk7k?file=/src/styles.css:37-275 */

  .flex {
    display: flex;
    --gap: 0px;
    --column-gap: var(--gap);
    --row-gap: var(--gap);
    margin: calc(-1 * var(--row-gap)) 0 0 calc(-1 * var(--column-gap));
  }

  :global(.flex > *) {
    margin: calc(var(--row-gap)) 0 0 calc(var(--column-gap));
  }
</style>

<svelte:window on:resize={setWidth} on:load={setWidth} />

<div
  bind:this={scene}
  class="flex horizonal-scene"
  style="--scroll: -{$scrollY}px; --column-gap: 20px;"
>
  <slot />
</div>
