<script>
  import cleanData from '/src/modules/data'
  import Bar from '../atoms/Bar.svelte'

  const data = cleanData()
</script>

{#await data}
  <h1>Loading...</h1>
{:then data}
  <Bar {data} />
{/await}
