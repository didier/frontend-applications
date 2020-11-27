<script>
  import cleanData from '/src/modules/data'
  import Bar from '../atoms/Bar.svelte'
  import Bar2 from '../atoms/Bar2.svelte'

  export let type = 'bar'
  const data = cleanData()

  let width
  let height
</script>

{#await data}
  <h1>Loading...</h1>
{:then data}
  {#if type === 'bar'}
    <Bar {data} {width} />
  {:else if type === 'bar2'}
    <Bar2 {data} {width} />
  {/if}
{/await}
