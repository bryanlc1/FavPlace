<template>
  <div class="public">
    <section class="user_info">
      <h1>{{ publicProfile.name }}</h1>
    </section>
    <section class="user__places">
      <arcticle class="card" v-for="place in publicProfile.places" :key="place">
        <router-link to="/detail">
          <img class="card__image" :src="place.images[0]" alt="imagen" />
        </router-link>
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
  margin: 0px auto 30px;
  max-width: 60vw;
  flex-wrap: wrap;
}

.user__places {
  display: flex;
  flex-wrap: wrap;
}
</style>