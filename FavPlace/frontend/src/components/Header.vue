<template>
  <nav class="header">
    <div v-if="islogged" class="header__navegation">
      <div class="navegatio__logon">
        <router-link to="/" class="link__logo">
          <h1>FavPlace</h1>
        </router-link>
      </div>
      <div class="navegation__user">
        <router-link to="/addform"><fa icon="plus" /></router-link>
        <router-link to="/profile"><fa icon="user" /></router-link>
        <button @click="handleLogout"><fa icon="power-off" /></button>
      </div>
    </div>
    <div v-else class="header__navegation">
      <router-link to="/" class="link">
        <h1>FavPlace</h1>
      </router-link>
      <router-link to="/login">login</router-link>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapMutations, mapState } from "vuex";
export default defineComponent({
  name: "Header",
  computed: {
    ...mapState(["islogged", "user"]),
  },

  methods: {
    ...mapMutations(["deleteDataFromLocalStorage"]),
    ...mapActions(["fetchUserFromLocalStorage"]),

    handleLogout() {
      this.deleteDataFromLocalStorage();
      this.$router.push("/");
    },
  },
  mounted() {
    this.fetchUserFromLocalStorage();
  },
});
</script>

<style scoped>
@import "../styles/global.scss";

.header {
  background: #f1d1af;
  position: fixed;
  top: 0;
  width: 100%;
}

.header__navegation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  max-width: 980px;
}

.navegation__user {
  display: flex;
  justify-content: space-between;
  width: 20vw;
}

.link__logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>