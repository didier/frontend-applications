<script>
  import Icon, { currencyEuro, cash } from '@4mende2/svelte-heroicons'
  export let icon

  const icons = {
    currencyEuro,
    cash,
  }
</script>

<style>
  span {
    display: inline-block;
    width: 1ch;
    height: 1ch;
  }
</style>

<span class="icon">
  <Icon icon={icons[icon]} />
</span>
