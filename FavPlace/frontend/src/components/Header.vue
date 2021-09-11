<template>
  <nav class="header">
    <div class="navegation">
      <router-link to="/" class="link"> <h1>FavPlace</h1></router-link>
      <div v-if="islogged" class="user_navegation">
        <router-link to="/addform"><fa icon="plus" /></router-link>
        <router-link to="/profile"><fa icon="user" /></router-link>
        <button @click="handleLogout"><fa icon="power-off" /></button>
      </div>
      <div v-else>
        <router-link to="/login">login</router-link>
      </div>
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
  background: #79989F;
  color: #f1f1f1;
  position: fixed;
  top: 0;
  width: 100%;
}

.navegation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  max-width: 980px;
}

.user_navegation {
  display: flex;
  justify-content: space-between;
  width: 20vw;
}
</style>