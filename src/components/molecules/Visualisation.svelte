<script>
  import Garage from '../atoms/Garage.svelte'
  import cleanData from '/src/modules/data'
  const data = cleanData()
</script>

{#await data}
  <h1>Loading...</h1>
{:then data}
  <!-- <h1>{JSON.stringify(data, null, 2)}</h1> -->
  <Garage />
{/await}
