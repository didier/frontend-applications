<script>
  import cleanData from '/src/modules/data'
  import Bar from '../atoms/Bar.svelte'
  import Bar2 from '../atoms/Bar2.svelte'
  import Button from '../atoms/Button.svelte'

  export let type = 'bar'
  const data = cleanData()

  let width

  let value
</script>

{#await data}
  <h1>Loading...</h1>
{:then data}
  {#if type === 'bar'}
    <Bar {data} {width} />
  {:else if type === 'bar2'}
    <!-- <select bind:value>
      <option value="1">1</option>
      <option value="2">2</option>
    </select> -->
    <!-- {value} -->
    <Bar2 {data} {width} />
  {/if}
{/await}
