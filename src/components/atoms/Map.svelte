<script>
  import { select, geoMercator, geoPath, max, axisLeft, axisBottom } from 'd3'
  import { onMount } from 'svelte'
  import { countItemsInArray } from '/src/modules/utils.js'
  import { getAxisValues } from '/src/modules/chart-utils.js'

  // Props
  export let width
  export let height
  export let data

  let svg

  // Setup MARGINs for the visualisation
  const CONFIG = {
    MARGIN: {
      TOP: 0,
      RIGHT: 0,
      BOTTOM: 24,
      LEFT: 100,
    },
  }

  const render = (data) => {
    /*
     * Select the instance of the svg element using d3.select.
     *
     * Notice how we're not using `'svg'`, but rather `svg` as a variable. This is because `svg` has been bound to the svg element by Svelte. By going this way, Svelte can optimize the functions to prevent re-renders.
     */
    const element = select(svg)

    // Configure inner width and height padding based on the configurated margins
    const innerWidth = width - CONFIG.MARGIN.LEFT - CONFIG.MARGIN.RIGHT
    const innerHeight = height - CONFIG.MARGIN.TOP - CONFIG.MARGIN.BOTTOM
    console.log(data[0])
    const projection = geoMercator()
      .center([2, 47]) // GPS of location to zoom on
      .scale(980) // This is like the zoom
      .translate([width / 2, height / 2])

    element
      .append('g')
      .selectAll('path')
      .data(data, (d) => d.location)
      .enter()
      .append('path')
      .attr('fill', 'grey')
      .attr('d', geoPath().projection(projection))
      .style('stroke', 'none')
    setTimeout(() => update(data), 1000)
  }
  onMount(() => render(data))
</script>

<style lang="scss">
  // div {
  //   height: 30vh;
  //   :global(rect) {
  //     fill: var(--color);
  //     border-radius: 10px;
  //   }
  //   :global(.tick) {
  //     color: var(--gray-400);
  //     font-size: 1rem;

  //     :global(line, .domain) {
  //       stroke: var(--gray-300);
  //     }
  //   }
  //   :global(text) {
  //     color: var(--gray-900);
  //   }
  // }
</style>

<div bind:clientWidth={width} bind:clientHeight={height}>
  <svg bind:this={svg} {width} {height} />
</div>
