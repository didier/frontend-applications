<script>
  // Lifecycle
  import { onMount } from 'svelte'

  // Utils
  import { fade } from 'svelte/transition'

  // Store
  import { scrollY } from '../meta/store'

  let isMounted = false

  onMount(() => {
    isMounted = true
  })
</script>

<style lang="scss">
  span {
    display: inline-block;
    transition: transform 0.1s var(--ease);
    transform-origin: center center;
  }
  .arrow {
    animation: fadeInRight 1s var(--ease) infinite;
  }

  .arrow-wrapper:not(.horizontal) {
    transform: rotate(0.25turn);
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(0);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translateX(0.5em);
    }
  }
</style>

{#key isMounted}
  <span in:fade={{ delay: 1000 }}>
    <slot />
    <span class="arrow-wrapper" class:horizontal={$scrollY !== 0}>
      <span class="arrow" aria-label="right"> → </span>
    </span>
  </span>
{/key}
