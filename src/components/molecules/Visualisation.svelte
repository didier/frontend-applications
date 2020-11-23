<script>
  import Bar from '../atoms/Bar.svelte'
  import cleanData from '/src/modules/data'
  const data = cleanData()
  let width
</script>

{#await data}
  <h1>Loading...</h1>
{:then data}
  <!-- <h1>{JSON.stringify(data, null, 2)}</h1> -->
  <div bind:clientWidth={width}>
    <Bar {data} {width} />
  </div>
{/await}
