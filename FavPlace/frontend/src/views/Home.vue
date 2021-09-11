<template>
  <div class="home">
    <section class="search">
      <input
        v-model="city"
        @input="fetchCity(city)"
        class="search__input"
        type="text"
        placeholder="pais,ciudad..."
      />
      <div class="select">
        <select
          v-model="category"
          id="standard-select"
          @change="fetchCategory(category)"
        >
          <option value="" selected disabled hidden>Categoria</option>
          <option value="parques">Parques</option>
          <option value="restaurante">Restaurantes</option>
          <option value="cc">Centros comerciales</option>
          <option value="">Todo</option>
        </select>
        <span class="focus"></span>
      </div>
    </section>
    <Cards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState, mapActions } from "vuex";
import Cards from "../components/Cards.vue";
export default defineComponent({
  name: "Home",
  components: {
    Cards,
  },
  computed: {
    ...mapState(["filterCity", "filterCategory"]),
  },

  methods: {
    ...mapMutations(["fetchCity", "fetchCategory"]),
    ...mapActions(["fetchPlaces"]),
  },
  mounted() {
    this.fetchPlaces();
  },

  data() {
    return {
      city: "",
      category: "",
    };
  },
});
</script>

<style scoped>
.home {
  margin: 0 auto;
  max-width: 980px;
}
.search {
  display: flex;
  margin: 10vh auto;
  justify-content: space-around;
}
.search__input {
  color: white;
  width: 20vw;
  font-size: 20px;
  border: solid 1px;
  background-color: #82b6c2;
  border-radius: 10px;
  margin-right: 80;
}

.search__input:hover {
  background-color: #79989f;
}

select {
  width: 20vw;
  font-size: 20px;
  border: solid 1px;
  background-color: #82b6c2;
  border-radius: 10px;
  margin-right: 80;
}
</style>
