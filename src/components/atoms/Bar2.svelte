<script>
  // Packages
  import {
    select,
    scaleLinear,
    scaleBand,
    max,
    axisLeft,
    axisBottom,
    format,
  } from 'd3'

  // Utils
  import { locationCostData } from '/src/modules/data.js'
  import { getAxisValues } from '/src/modules/chart-utils.js'
  import { CONFIG } from '/src/modules/constants.js'

  // Props
  export let width
  export let height
  export let data

  let tooltip = 'test'
  let svg
  let div
  let value = 'averageHourlyCost'

  const costData = locationCostData({ data: data, isSorted: true })

  $: render = (data, value) => {
    // console.log(data)
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

    const xProperty = value
    const yProperty = 'area'

    const [xValue, yValue] = getAxisValues(xProperty, yProperty)

    const xScale = scaleLinear()
      .domain([0, max(data, xValue)])
      .range([0, innerWidth])

    const yScale = scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0.1)

    // Append the axes (xScale, yScale) to new group elements
    g.append('g')
      .call(axisLeft(yScale))
      .selectAll('.domain, .tick line')
      .remove()

    const xAxis = axisBottom(xScale).tickFormat((d) => {
      // Add euro sign to clarify axis
      return '€' + format(',.2f')(d)
    })

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

  $: render(costData, value)
</script>

<style lang="scss">
  div {
    position: relative;
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

  h4 {
    position: absolute;
    top: 4rem;
    right: 0;
    width: 100%;
    text-align: right;
  }
</style>

<!-- Re-render the contents on resize to prefent duplicate renders -->
{#key height}
  <div bind:clientWidth={width} bind:clientHeight={height} bind:this={div}>
    <svg bind:this={svg} {width} {height} />
    <h4>
      {value === 'averageChargingCapacity' ? 'Amount of charging points' : 'Parking price in €/hour'}<br
      />
      measured by city averages.
    </h4>
  </div>
{/key}
