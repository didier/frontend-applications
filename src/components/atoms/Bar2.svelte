<script>
  // Packages
  import { select, scaleLinear, scaleBand, max, axisLeft, axisBottom } from 'd3'

  // Lifecycle
  import { onMount } from 'svelte'

  // Utils
  import { locationCostData } from '/src/modules/data.js'
  import { getAxisValues } from '/src/modules/chart-utils.js'

  // Props
  export let width
  export let height
  export let data

  let svg
  let div

  // Setup MARGINs for the visualisation
  const CONFIG = {
    MARGIN: {
      TOP: 0,
      RIGHT: 0,
      BOTTOM: 24,
      LEFT: 150,
    },
  }

  const costData = locationCostData({ data: data, isSorted: true })

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

    const g = element
      .append('g')
      .attr(
        'transform',
        `translate(${CONFIG.MARGIN.LEFT}, ${CONFIG.MARGIN.TOP})`
      )

    const xProperty = 'averageHourlyCost'
    const yProperty = 'area'

    const [xValue, yValue] = getAxisValues(xProperty, yProperty)

    const xScale = scaleLinear()
      .domain([0, max(data, xValue)])
      .range([0, innerWidth])

    const yScale = scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0)

    // Append the axes (xScale, yScale) to new group elements
    g.append('g')
      .call(axisLeft(yScale))
      .selectAll('.domain, .tick line')
      .remove()

    const xAxis = axisBottom(xScale)

    g.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${innerHeight})`)
      .attr('class', 'cost')

    function update(data) {
      g.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('y', (d) => yScale(d[yProperty]))
        .attr('height', yScale.bandwidth())
        .attr('rx', 4)
        .transition()
        .attr('width', (d) => xScale(d[xProperty]))
        .duration(1000)
    }

    setTimeout(() => update(data), 1000)
  }

  onMount(() => render(costData))
</script>

<style lang="scss">
  div {
    svg {
      height: 70vh;
    }

    :global(rect) {
      fill: var(--teal-500);
    }

    :global(.tick) {
      color: var(--gray-400);
      font-size: 1rem;

      :global(line, .domain) {
        stroke: var(--gray-300);
      }
    }

    :global(text) {
      color: currentColor;
    }

    :not(.cost) .tick text {
      font-size: 0.4rem;
      transform: rotate(0.125turn);
    }
  }
</style>

<div bind:clientWidth={width} bind:clientHeight={height} bind:this={div}>
  <svg bind:this={svg} {width} {height} />
</div>
