<template>
  <div class="header">
    <router-link to="/" class="link"> <h1>FavPlace</h1></router-link>

    <div v-if="islogged">
      <router-link to="/profile">User</router-link>
      <button @click="handleLogout">LogOut</button>
      <router-link to="/addform">Add_Place</router-link>
    </div>

    <div v-else>
      <router-link to="/login">login</router-link>
    </div>
  </div>
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
  background-color: #066f68;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
}
</style>