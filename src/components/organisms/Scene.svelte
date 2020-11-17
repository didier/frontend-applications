<script>
  import Scroll from '../atoms/Scroll.svelte'
  import Placeholder from '../meta/Placeholder.svelte'
  import HorizontalScene from '../molecules/HorizontalScene.svelte'
  import RoadScene from '../molecules/RoadScene.svelte'
  import TextElement from '../atoms/TextElement.svelte'
</script>

<HorizontalScene>
  <!-- Insert 100 placeholder items to see if horizontal spacing works -->
  <TextElement>
    <h1>
      As a parking spot's customer price increases, does its convenience
      increase too?
    </h1>

    <p>
      An interactive data visualisation centered around parking in the city.
    </p>
  </TextElement>
  <TextElement>
    <h2>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam magni.
    </h2>
  </TextElement>
  <TextElement>
    <h2>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam magni.
    </h2>
  </TextElement>
  {#each [...Array(100)] as _}
    <Placeholder />
  {/each}
</HorizontalScene>

<Scroll />

<RoadScene />
