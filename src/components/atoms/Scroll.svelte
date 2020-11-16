<script>
  import { horizontalScrollWidth } from '../meta/store.js'
  /**
   * This component takes on a height equal to the width of the HorizontalScene component, meaning that every pixel scrolled vertically equals one pixel scrolled horizontally inside HorizontalScene.
   */
</script>

<style>
  div {
    width: 1ch;
    height: var(--height);
  }
</style>

<div style="--height: {$horizontalScrollWidth}px" />
