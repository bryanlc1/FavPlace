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
          <option value="restaurantes">Restaurantes</option>
          <option value="centros comerciales">Centros comerciales</option>
          <option value="">Todo</option>
        </select>
        <span class="focus"></span>
      </div>
    </section>
    <Cards :city="city" :category="category" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapState, mapActions } from "vuex";
import Cards from "@/components/Cards.vue";

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
.search {
  display: flex;
  justify-content: space-between;
  margin: 5em auto;
  max-width: 935px;
  align-items: center;
}
.search__input {
  width: 20vw;
  font-size: 20px;
  border: solid 1px;
  background-color: lightgrey;
  border-radius: 10px;
  margin-right: 80;
}

select {
  width: 20vw;
  font-size: 20px;
  border: solid 1px;
  background-color: lightgrey;
  border-radius: 10px;
  margin-right: 80;
}
</style>
