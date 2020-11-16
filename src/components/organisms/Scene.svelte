<script>
  import Scroll from '../atoms/Scroll.svelte'
  import Placeholder from '../meta/Placeholder.svelte'
  import HorizontalScene from '../molecules/HorizontalScene.svelte'
  import RoadScene from '../molecules/RoadScene.svelte'
</script>

<HorizontalScene>
  <!-- Insert 100 placeholder items to see if horizontal spacing works -->
  {#each [...Array(100)] as _}
    <Placeholder />
  {/each}
  <!-- <h1>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam magni
    assumenda corrupti, saepe fugit sapiente libero sit eveniet enim odio animi
    ratione fugiat quae. Cum voluptatem possimus eum laudantium. Quasi autem
    quam ullam? Accusamus, quis! Molestiae nostrum cum ex officia, ab quae
    numquam iste aperiam eaque architecto tempora sit veritatis et pariatur
    cumque sapiente quis ipsam! Quae impedit distinctio architecto.
  </h1>
  <h1>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam magni
    assumenda corrupti, saepe fugit sapiente libero sit eveniet enim odio animi
    ratione fugiat quae. Cum voluptatem possimus eum laudantium. Quasi autem
    quam ullam? Accusamus, quis! Molestiae nostrum cum ex officia, ab quae
    numquam iste aperiam eaque architecto tempora sit veritatis et pariatur
    cumque sapiente quis ipsam! Quae impedit distinctio architecto.
  </h1> -->
</HorizontalScene>

<Scroll />

<RoadScene />
