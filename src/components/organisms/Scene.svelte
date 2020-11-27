<script>
  import Scroll from '/src/components/atoms/Scroll.svelte'
  import HorizontalScene from '/src/components/molecules/HorizontalScene.svelte'
  import RoadScene from '/src/components/molecules/RoadScene.svelte'
  import TextElement from '/src/components/atoms/TextElement.svelte'
  import Visualisation from '/src/components/molecules/Visualisation.svelte'
  import ScrollIndicator from '/src/components/atoms/ScrollIndicator.svelte'
  import Garage from '/src/components/atoms/Garage.svelte'
  import Credits from '../meta/Credits.svelte'
</script>

<Scroll />
<Credits />
<RoadScene>
  <HorizontalScene>
    <TextElement center>
      <h1>
        <q>As a parking spot&CloseCurlyQuote;s customer price increases, does
          its convenience increase too?</q>
      </h1>

      <p>
        An interactive data visualisation centered around parking in the city.
      </p>
      <small>By <a href="https://didiercatz.com">Didier Catz</a></small>
      <ScrollIndicator />
    </TextElement>
    <TextElement>
      <h2>
        Who doesn't love looking for parking spots? (Hint: not many people do. )
      </h2>
      <p>
        Looking for a place to park can be a real pain. How do you know if there
        will be a spot for you, especially in a more expensive or more popular
        location? And will it be accessible? We'll be diving deeper into how
        these factors relate to each other.
      </p>
      <ScrollIndicator />
    </TextElement>
    <TextElement center>
      <Garage />
      <br />
      <h3>
        This illustration of a garage indicates a parking location. These
        locations can be garages, malls, spots on the street, and so forth.
      </h3>
    </TextElement>

    <TextElement let:width>
      <Visualisation type="bar" {width} />
    </TextElement>
    <TextElement>
      <h2 class="h1">
        Now, let&CloseCurlyQuote;s look at how hourly parking cost affects
        convenience.
        <ScrollIndicator />
      </h2>
    </TextElement>
    <TextElement>
      <Visualisation type="bar2" />
    </TextElement>
  </HorizontalScene>
</RoadScene>
