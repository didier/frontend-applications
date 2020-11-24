<script>
  import Scroll from '/src/components/atoms/Scroll.svelte'
  import HorizontalScene from '/src/components/molecules/HorizontalScene.svelte'
  import RoadScene from '/src/components/molecules/RoadScene.svelte'
  import TextElement from '/src/components/atoms/TextElement.svelte'
  import Visualisation from '/src/components/molecules/Visualisation.svelte'
  import ScrollIndicator from '/src/components/atoms/ScrollIndicator.svelte'
  import Garage from '/src/components/atoms/Garage.svelte'
</script>

<HorizontalScene>
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
    <h2>Who doesn't love looking for parking spots?</h2>
    <p>
      Looking for a place to park can be a real pain. How do you know if there
      will be a spot for you, especially in a more more expensive or more
      popular location? We'll be diving deeper into how these factors relate to
      each other.
    </p>
    <p>Let's establish some things first.</p>
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
  <TextElement>
    <p>
      This website uses data from the RDW, and compresses it to a limited set of
      parking locations of which both tariff and location data was available.
    </p>
  </TextElement>
  <Garage />
  <TextElement>
    <Visualisation />
  </TextElement>
</HorizontalScene>

<RoadScene />
<Scroll />
