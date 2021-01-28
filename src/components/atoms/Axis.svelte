<script>
  import { select, axisBottom, axisLeft, format } from 'd3'

  export let height
  export let margin
  export let position
  export let scale

  export let formatting = ''
  export let addEuroSign = false
  let transform
  let g

  $: {
    select(g).selectAll('*').remove()

    let axis
    switch (position) {
      case 'bottom':
        axis = axisBottom(scale)
          .tickSizeOuter(0)
          .tickFormat((d) => {
            // Add euro sign to clarify axis
            return `${addEuroSign ? '€' : ''}${format(formatting)(d)}`
          })
        transform = `translate(0, ${height - margin})`
        break
      case 'left':
        axis = axisLeft(scale).tickSizeOuter(0)
        transform = `translate(${margin}, 0)`
    }

    select(g).call(axis)
  }
</script>

<g class="axis" bind:this={g} {transform}>
  <text fill="currentColor">test</text>
</g>
