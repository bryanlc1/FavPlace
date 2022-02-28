<template>
  <section class="cards">
    <arcticle class="card" v-for="place in filterPlaces" :key="place">
      <div class="card__header">
        <div class="avatar">
         
          <router-link :to="'/public/' + place.user[0]._id">
            <img class="avatar__image" :src="place.user[0].image" />
          </router-link>
        </div>
        <div class="avatar__data">
          <p class="title">{{ place.user[0].name }}</p>
          <p>{{ place.country }}, {{ place.city }}</p>
        </div>
      </div>
      <carousel :slides="place.images"></carousel>       
      <div class="header__footer">
        <span class="title">{{ place.namePlace }}</span>
        <span>
          {{ place.comment }}
        </span>
      </div>
      <div>
        <a
          :href="
            'https://maps.google.com/?q=' +
            place.street +
            '+' +
            place.number +
            '+' +
            place.city
          "
          target="_blank"
        >
          <fa icon="map-marker-alt" />
        </a>
      </div>
    </arcticle>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions, mapGetters } from "vuex";
import Carousel from "./carousel/Carousel.vue";

export default defineComponent({
  name: "Cards",
   components : {Carousel},
  computed: {
    ...mapState(["places"]),

    ...mapGetters(["filterPlaces"]),
  },
  methods: {
    ...mapActions(["fetchPlaces"]),
  },
});
</script>

<style scoped>
@import "../styles/global.scss";
.cards {
  display: flex;
  margin: 0px auto;
  flex-direction: column-reverse;
  max-width: 935px;
  align-items: center;
}

.card {
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-shadow: 0 1px 3px rgb(130 77 59);
  width: 50%;
}

.card__header {
  display: flex;
  margin-bottom: 10px;
}


.avatar {
  border-radius: 50%;
  height: 64px;
  width: 64px;
  margin-right: 10px;
}

.avatar__image {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.avatar__data {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.header__footer {
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 0px;
}

.carousel{
  margin-top: 20px;
  
}


</style>
