<script>
  // Imports
  import { onMount } from 'svelte'
  import { quartOut } from 'svelte/easing'
  import { fly } from 'svelte/transition'

  // Components
  import Scroll from '/src/components/atoms/Scroll.svelte'
  import HorizontalScene from '/src/components/molecules/HorizontalScene.svelte'
  import RoadScene from '/src/components/molecules/RoadScene.svelte'
  import TextElement from '/src/components/atoms/TextElement.svelte'
  import Visualisation from '/src/components/molecules/Visualisation.svelte'
  import ScrollIndicator from '/src/components/atoms/ScrollIndicator.svelte'
  import Garage from '/src/components/atoms/Garage.svelte'
  import Credits from '../meta/Credits.svelte'

  let isHeadlineVisible = false
  onMount(() => (isHeadlineVisible = true))
  export let title =
    '“As a parking spot’s customer price increases, does its convenience increase too?”'

  // Scoped state
  $: titleArray = title.split(' ')

  // Check if headline animation is done
  let isTextAnimationDone = false

  function setIsReady(idx) {
    if (idx + 1 === titleArray.length) {
      isTextAnimationDone = true
    }
  }
</script>

<style lang="scss">
  .headline {
    display: inline-block;
    line-height: 1.135;
    margin-bottom: var(--step--1);

    span {
      display: inline-block;
    }
  }
  .mask {
    overflow: hidden;
  }
</style>

<Scroll />
<Credits />
<RoadScene>
  <HorizontalScene>
    <TextElement center>
      {#if isHeadlineVisible}
        <h1
          class="max-w-screen-lg mx-auto my-12 headline lg:text-center md:my-0"
        >
          {#each titleArray as word, idx}
            <!-- {word} -->
            <span class="mask">
              <span
                in:fly={{ y: 64, duration: 1000, delay: 65 * idx + 1000, easing: quartOut }}
                on:introend={() => setIsReady(idx)}
              >{word}&nbsp;</span>
            </span>
          {/each}
        </h1>
      {/if}

      {#if isTextAnimationDone}
        <p in:fly={{ y: 20 }}>
          An interactive data visualisation centered around parking in the city.
        </p>
        <small in:fly={{ y: 20, delay: 200 }}>
          By
          <a href="https://didiercatz.com">Didier Catz</a></small>
        <ScrollIndicator />
      {/if}
    </TextElement>
    <TextElement>
      <h2>
        Who doesn&CloseCurlyQuote;t love looking for parking spots? (Hint: not
        many people do.)
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
    <TextElement>
      <h4 class="h2">
        As it turns out, paying more for parking does not guarantee more
        convenience. For one, most parking locations don't have electric vehicle
        charging points.
      </h4>
    </TextElement>
  </HorizontalScene>
</RoadScene>
