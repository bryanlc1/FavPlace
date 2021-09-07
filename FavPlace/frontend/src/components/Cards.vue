<template>
  <section class="cards">
    <arcticle class="card" v-for="place in filterPlaces" :key="place.name">
      <div class="card__header">
        <div class="avatar">
          <img
            class="avatar__image"
            src="https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png"
          />
        </div>
        <div>
          <p>{{ place.user[0].name }}</p>
          <p>{{ place.country }}, {{ place.city }}</p>
        </div>
      </div>
      <div class="card__main">
        <router-link :to="'/detail/' + place._id">
          <img class="card__image" :src="place.images[0]" alt="" />
        </router-link>
      </div>
      <div class="header__footer">
        <span class="title">{{ place.namePlace }}</span>
        <span>
          {{ place.comment }}
        </span>
      </div>
    </arcticle>
  </section>
</template>

<script>
import { defineComponent } from "vue";

import { mapState, mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "Cards",
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
  flex-direction: column;
  max-width: 935px;
  align-items: center;
}

.card {
  margin-bottom: 3em;
  display: flex;
  flex-direction: column;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  padding: 1em;
  box-shadow: 0 1px 3px rgb(255 0 120);
  width: 50%;
}

.card__header {
  display: flex;
}

.card__image {
  width: 100%;
}

.avatar {
  border-radius: 50%;
  height: 64px;
  width: 64px;
}

.avatar__image {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.header__footer {
  display: flex;
  flex-direction: column;
  padding: 5px 5px 5px 0px;
}
</style>
