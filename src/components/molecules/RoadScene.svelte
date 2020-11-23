<script>
  import Car from '../atoms/Car.svelte'

  export let isDriving = false

  import { horizontalScrollWidth, scrollY } from '../meta/store'

  $: isDriving = $scrollY !== 0
</script>

<style>
  .road-scene {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 20vh;
    padding: 20px;
    /* overflow-x: hidden; */
  }

  .road {
    position: absolute;
    left: 0;
    bottom: 0;
    background-image: url('/assets/road.svg');
    background-repeat: repeat-x;
    background-position: center bottom;
    background-size: contain;
    height: 10vh;
    width: 300vw;
    z-index: 0;
    overflow: hidden;
    animation: slide 5s linear infinite;
    animation-play-state: paused;
  }

  .background {
    height: 30vh;
    position: absolute;
    bottom: 10vh;
    width: 300vw;
    left: 0;
    /* overflow: visible; */
    background-repeat: repeat-x;
    background-image: url('/assets/background.svg');
    /* background-size: 100%; */
    animation: slide 10s linear infinite;
    animation-play-state: paused;
    z-index: -1;
    opacity: 0.3;
  }

  .is-scrolling {
    animation-delay: var(--delay);
  }

  @keyframes slide {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-160vw, 0, 0);
    }
  }
</style>

<svelte:window bind:scrollY={$scrollY} />

<div
  class="road-scene"
  style="--delay: -{$scrollY}ms; --scroll: {($horizontalScrollWidth / ($horizontalScrollWidth - $scrollY)) * 100 - 100}%"
>
  <div class="road" class:is-scrolling={isDriving} />
  <div class="background" class:is-scrolling={isDriving} />
  <Car {isDriving} style="--delay: -{$scrollY}ms" />
</div>
