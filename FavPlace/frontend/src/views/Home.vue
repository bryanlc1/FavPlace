<template>
  <div class="home">
    <section class="search">
      <input class="search__input" type="text" placeholder="pais,ciudad..." />
      <div class="select">
        <select id="standard-select">
          <option value="" selected disabled hidden>Categoria</option>
          <option value="Option 1">Parques</option>
          <option value="Option 2">Restaurantes</option>
          <option value="Option 3">Centros comerciales</option>
        </select>
        <span class="focus"></span>
      </div>
      <button class="boton" type="button">Search</button>
    </section>
    <Cards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Cards from "@/components/Cards.vue";

export default defineComponent({
  name: "Home",
  components: {
    Cards,
  },
});
</script>

<style scoped>
.search {
  display: flex;
  justify-content: space-between;
  margin: 5em auto;
  max-width: 935px;
  align-items: center;
}
.search__input {
  border-radius: 4px;
  border: none;
}
select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  cursor: inherit;
  line-height: inherit;
  z-index: 1;
  outline: none;
}
select::-ms-expand {
  display: none;
}

.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
}
.select select,
.select::after {
  grid-area: select;
}
.select:not(.select--multiple)::after {
  content: "";
  justify-self: end;
  width: 0.8em;
  height: 0.5em;
  background-color: var(--select-arrow);
  -webkit-clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--select-focus);
  border-radius: inherit;
}
</style>
