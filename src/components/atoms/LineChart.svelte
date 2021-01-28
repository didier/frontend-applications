<script>
  import { scaleLinear, extent, max, line } from 'd3'

  // Modules
  import { CONFIG } from '/src/modules/constants.js'

  // Svelte
  import { cubicInOut } from 'svelte/easing'

  // Components
  import Axis from './Axis.svelte'

  export let data

  let height = 400
  let width
  let value = 'convenience'

  $: xProperty = value
  $: yProperty = 'parkingCapacity'

  $: sortedData = data
    .map((entry) => {
      const convenience = entry.parkingCapacity / entry.hourlyCost

      return { ...entry, convenience }
    })
    .sort((a, b) => a[xProperty] - b[xProperty])

  $: xScale = scaleLinear()
    .domain(extent(sortedData, (d) => d[xProperty]))
    .range([CONFIG.MARGIN.LEFT, width - CONFIG.MARGIN.RIGHT])

  $: yScale = scaleLinear()
    .domain([0, max(sortedData, (d) => +d[yProperty])])
    .range([height - CONFIG.MARGIN.BOTTOM, CONFIG.MARGIN.TOP])

  $: lineGenerator = line()
    .x((d) => xScale(d[xProperty]))
    .y((d) => yScale(+d[yProperty]))

  const reveal = (node, { duration, easing }) => {
    if (!xScale || !yScale) return
    const length = node.getTotalLength()
    node.style.strokeDasharray = length
    return {
      duration,
      easing,
      css: (t, u) => `
        stroke-dashoffset: ${u * length};
        stroke-width: ${t * 4};
      `,
    }
  }
</script>

<style>
  .convenience {
    height: 60vh;
  }

  svg {
    position: absolute;
    left: 0;
    top: 0;
  }

  select {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 20ch;
    padding: 12px 16px;
    border-radius: 8px;
    margin: 1rem;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: -10%;
    transform: translateX(-50%);
  }

  .label-y {
    left: 20%;
    top: 0;
    transform: rotate(-90deg);
  }
</style>

<div class="convenience" bind:clientWidth={width} bind:clientHeight={height}>
  {#key value}
    <svg {width} {height}>
      {#key width}
        <Axis
          {height}
          margin={CONFIG.MARGIN.BOTTOM}
          scale={xScale}
          position="bottom"
          formatting={value === 'hourlyCost' ? ',.2f' : '.1'}
          addEuroSign={value === 'hourlyCost'}
        />
        <Axis
          {height}
          margin={CONFIG.MARGIN.LEFT}
          scale={yScale}
          position="left"
        />
        <path
          d={lineGenerator(sortedData)}
          stroke="var(--teal-500)"
          stroke-width={4}
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          in:reveal={{ duration: 3000, easing: cubicInOut }}
        />
      {/key}
    </svg>
  {/key}

  <select bind:value>
    <option value="hourlyCost">Hourly Cost</option>
    <option value="convenience">Convenience</option>
  </select>

  <p class="label-x">
    {value === 'hourlyCost' ? 'Hourly Cost' : 'Convenience factor'}
  </p>

  <p class="label-y">Parking capacity</p>
</div>
