<script>
  // Packages
  import { select, scaleLinear, scaleBand, max, axisLeft, axisBottom } from 'd3'

  // Lifecycle
  import { onMount } from 'svelte'

  // Utils
  import { countItemsInArray } from '/src/modules/utils.js'
  import { getAxisValues } from '/src/modules/chart-utils.js'
  import { CONFIG } from '/src/modules/constants.js'
  // Props
  export let data
  let width
  let height

  let svg

  const percentAccessible = data
    .map((entry) => entry.wheelchairAccessible)
    .reduce(countItemsInArray, {})

  $: inaccessibleAmount = (
    percentAccessible.false / percentAccessible.true
  ).toFixed(0)

  const percentAccessibleArray = [
    {
      label: 'Accessible',
      amount: percentAccessible.true,
    },
    {
      label: 'Inaccessible',
      amount: percentAccessible.false,
    },
  ]

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

    const [xValue, yValue] = getAxisValues('amount', 'label')

    const xScale = scaleLinear()
      .domain([0, max(data, xValue)])
      .range([0, innerWidth])

    const yScale = scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0.2)

    // Append the axes (xScale, yScale) to new group elements
    g.append('g')
      .call(axisLeft(yScale))
      .selectAll('.domain, .tick line')
      .remove()

    const xAxis = axisBottom(xScale)

    g.append('g').call(xAxis).attr('transform', `translate(0, ${innerHeight})`)

    function update(data) {
      g.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('y', (d) => yScale(d.label))
        .attr('height', yScale.bandwidth())
        .transition()
        .attr('width', (d) => xScale(d.amount))
        .duration(1000)
        .attr('rx', 8)
        .attr(
          'style',
          (d) =>
            `--color: ${
              d.label === 'Accessible' ? 'var(--green-500)' : 'var(--red-500)'
            }`
        )
    }

    setTimeout(() => update(data), 1000)
  }
  onMount(() => render(percentAccessibleArray))
</script>

<style lang="scss">
  div {
    height: 30vh;
    margin: 2rem 0;

    :global(rect) {
      fill: var(--color);
      border-radius: 10px;
    }

    :global(.tick) {
      // color: var(--gray-500);
      // color: var(--gray-900);
      font-size: 1rem;

      :global(line, .domain) {
        stroke: var(--gray-300);
      }
    }

    :global(text) {
      color: currentColor;
    }
  }
</style>

<!--
<h2>Wheelchair-accessible parking</h2> -->
<div bind:clientWidth={width} bind:clientHeight={height}>
  <svg bind:this={svg} {width} {height} />
</div>
<h4>
  Out of this data,
  {percentAccessible.true}
  out of
  {percentAccessible.true + percentAccessible.false}
  parking locations are wheelchair-accessible. That's about 1 in every
  {inaccessibleAmount}. That's not enough. Ideally, in every parking location,
  one in every 57 spots is accessible. Not one in every
  {inaccessibleAmount}
  locations.
</h4>
