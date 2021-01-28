<script>
  import cleanData from '/src/modules/data'
  import Bar2 from '../atoms/Bar2.svelte'
  import Wheelchair from '../atoms/Wheelchair.svelte'
  import Convenience from '../atoms/Convenience.svelte'

  export let type = 'wheelchair'
  const data = cleanData()

  let width

  let value
</script>

{#await data}
  <h1>Loading...</h1>
{:then data}
  {#if type === 'wheelchair'}
    <Wheelchair {data} {width} />
  {:else if type === 'bar2'}
    <!-- <select bind:value>
      <option value="1">1</option>
      <option value="2">2</option>
    </select> -->
    <!-- {value}
    -->
    <Bar2 {data} {width} />
  {:else if type === 'convenience'}
    <Convenience {data} />
  {/if}
{/await}
