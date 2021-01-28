<script>
  import LineChart from './LineChart.svelte'

  // Props
  export let data

  const paidParkingData = data
    .filter(({ hourlyCost }) => hourlyCost > 0)
    .filter(({ chargingPointCapacity }) => chargingPointCapacity > 0)
    .sort((a, b) => a.hourlyCost - b.hourlyCost)

  // Average of cheapest location (charging points, parking capacity)
  // const cheapestAverages = paidParkingData[0]

  // Average of most expensive location
  // const expensiveAverage = paidParkingData[paidParkingData.length - 1]
  $: console.log(data, paidParkingData)
</script>

<LineChart data={paidParkingData} />
