<template>
  <div class="profile">
    <section class="profile__info">
      <div class="info">
        <h1 class="title">{{ user.name }} {{ user.lastName }}</h1>
        <span>{{ user.email }}</span>
        <span>{{}}</span>
      </div>
      <div class="profile__image">
        <img class="image__profile" :src="user.image" />
      </div>
    </section>
    <div>
      <h1 class="title">Publicaciones</h1>
    </div>
    <section class="profile__places">
      <arcticle
        class="card__profile"
        v-for="place in user.places"
        :key="place.placeName"
      >
        <img class="place__image" :src="place.images[0]" alt="imagen" />
        <button class="delete" @click="handleDeletePlace(place._id)">
          <fa icon="trash-alt" />
        </button>
      </arcticle>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "Profile",
  computed: {
    ...mapState(["user"]),
  },

  methods: {
    ...mapActions(["deletePlace"]),

    handleDeletePlace(currentPlaceId) {
      this.deletePlace(currentPlaceId);
      this.$forceUpdate();
    },
  },
});
</script>
<style>
.profile {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 980px;
}

.profile__info {
  display: flex;
  margin: 15vh 0 10vh;
  height: 20%;
  flex-direction: column;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile__places {
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: start;
}
.card__profile {
  margin: 0px 20px 20px 0px;
  position: relative;
}

.place__image {
  height: 250px;
  width: 300px;
  object-fit: cover;
}

.profile__image {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  margin-top: 20px;
}
.image__profile {
  border-radius: 50%;
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.delete {
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background-color: rgb(104 48 0 / 60%);
}
</style>

