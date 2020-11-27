<script>
  export let isDriving
</script>

<style>
  .background {
    --width: 2728px;
    height: 20vh;
    position: absolute;
    left: 0;
    bottom: 5vh;
    width: calc(var(--width) * 3);
    background-repeat: repeat-x;
    background-image: url('/assets/background.svg');
    animation: slide 10s linear infinite;
    animation-play-state: paused;
    background-position: center bottom;
    background-size: contain;
    z-index: -1;
    opacity: 0.1;
  }

  .is-scrolling {
    animation-delay: var(--delay);
  }
</style>

<div class="background" class:is-scrolling={isDriving} />
