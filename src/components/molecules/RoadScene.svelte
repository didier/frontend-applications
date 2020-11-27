<script>
  // Imports
  import { scaleLinear } from 'd3'
  import { horizontalScrollWidth, scrollY } from '../meta/store'

  // Components
  import Background from '../atoms/Background.svelte'
  import Car from '../atoms/Car.svelte'

  // Props
  let innerWidth

  // Reactive statements
  $: isDriving = $scrollY !== 0

  // Use D3 to map the to scrolled amount to [0, 100]
  $: scale = scaleLinear().domain([0, $horizontalScrollWidth]).range([0, 100])
</script>

<style>
  .road-scene {
    --road-offset: 5vh;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    padding: var(--step-0);
  }

  .road {
    --width: 920px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: url('/assets/road.svg');
    background-repeat: repeat-x;
    background-position: center bottom;
    background-size: contain;
    height: var(--road-offset);
    width: calc(6 * var(--width));
    z-index: 0;
    overflow: hidden;
    animation: slide 2.5s linear infinite;
    animation-play-state: paused;
  }

  .is-scrolling {
    animation-delay: var(--delay);
  }
</style>

<svelte:window bind:scrollY={$scrollY} bind:innerWidth />

<div class="road-scene" style="--delay: -{$scrollY}ms; --scroll: -{$scrollY}px">
  <div class="road" class:is-scrolling={isDriving} />
  <Background {isDriving} />
  <slot />
  <Car
    {isDriving}
    style="--delay: -{$scrollY}ms; --scroll: {scale($scrollY)}vw"
  />
</div>
