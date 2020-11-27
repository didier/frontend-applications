<script>
  import TextElement from '../atoms/TextElement.svelte'
</script>

<style>
  .credits {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
  }
</style>

<div class="credits">
  <TextElement>
    <h4 class="h1">Thanks for reading!</h4>
    <p>
      This website uses data from the RDW, and compresses it to a limited set of
      parking locations of which both tariff and location data was available.
    </p>
    <h5 class="h3">Sources</h5>
    <ul>
      <li>
        <a
          href="https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-TARIEFDEEL/534e-5vdg"
        >
          Open Data RDW — Tariefdeel. (n.d.). Open Data RDW.
        </a>
      </li>
      <li>
        <a
          href="https://opendata.rdw.nl/Parkeren/Open-Data-Parkeren-SPECIFICATIES-PARKEERGEBIED/b3us-f26s"
        >
          Open Data RDW — Specificaties Parkeergebied. (n.d.). Open Data RDW.
        </a>
      </li>
      <li>
        <a href="https://opendata.rdw.nl/browse">
          Open Data RDW — Datasets. (n.d.). Open Data RDW.
        </a>
      </li>
    </ul>
    <h5 class="h3">Built with</h5>
    <ul>
      <li><a href="https://d3js.org/">D3.js — Data Driven Documents</a></li>
      <li>
        <a href="https://svelte.dev/">Svelte — Cybernetically enhanced web apps</a>
      </li>
    </ul>
    <br />
    <small>&copy;
      <a href="https://didiercatz.com">Didier Catz</a>,
      {new Date().getFullYear()}</small>
  </TextElement>
</div>
