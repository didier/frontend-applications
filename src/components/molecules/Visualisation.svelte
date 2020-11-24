<script>
  import cleanData from '/src/modules/data'
  import Bar from '../atoms/Bar.svelte'
  import Map from '../atoms/Map.svelte'

  export let type = 'bar'
  const data = cleanData()
</script>

{#await data}
  <h1>Loading...</h1>
{:then data}
  {#if type === 'bar'}
    <Bar {data} />
  {:else if type === 'map'}
    <Map {data} />
  {/if}
{/await}
