<script>
  import { onMount } from 'svelte'

  import { fade } from 'svelte/transition'

  let isMounted = false

  onMount(() => {
    isMounted = true
  })
</script>

<style>
  span {
    /* color: ; */
  }
  .arrow {
    display: inline-block;
    animation: fadeInRight 1s var(--ease) infinite;
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(0);
    }

    50% {
      opacity: 1;
      /* transform: translateX(0.8em); */
    }
    100% {
      opacity: 0;
      transform: translateX(0.5em);
    }
  }

  div {
    display: inline-flex;
  }
</style>

{#key isMounted}
  <span in:fade={{ delay: 5000 }}>
    Keep scrolling
    <span class="arrow" aria-label="right">→</span>
  </span>
{/key}
