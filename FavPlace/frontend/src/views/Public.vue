<template>
  <div class="public">
    <section class="user__info">
      <h1 class="title">
        {{ publicProfile.name }} {{ publicProfile.lastName }}
      </h1>
      <div class="user__image">
        <img class="image__user" :src="publicProfile.image" />
      </div>
    </section>
    <div>
      <h1 class="title">Publicaciones</h1>
    </div>
    <section class="user__places">
      <arcticle
        class="card__public"
        v-for="place in publicProfile.places"
        :key="place"
      >
        <img class="place__image" :src="place.images[0]" alt="imagen" />
        <div class="name__place">
          {{ place.namePlace }}
        </div>
      </arcticle>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "Public",
  computed: {
    ...mapState(["publicProfile"]),
  },
  methods: {
    ...mapActions(["fetchPublic"]),
  },
  mounted() {
    const route = useRoute();
    const { publicId } = route.params;
    this.fetchPublic(publicId);
  },
});
</script>

<style>
.public {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 980px;
}

.user__info {
  display: flex;
  margin: 15vh 0 10vh;
  height: 20%;
  flex-direction: column;
  align-items: center;
}
.user__places {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: start;
}
.card__public {
  margin: 0px 20px 20px 0px;
  position: relative;
}

.place__image {
  height: 250px;
  width: 300px;
  object-fit: cover;
}

.user__image {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-top: 20px;
}
.image__user {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.name__place {
  text-align: center;
  width: 100%;
  color: black;
  position: absolute;
  bottom: 4px;
  z-index: 10;
  background-color: rgb(241 209 175 / 54%);
}
</style>