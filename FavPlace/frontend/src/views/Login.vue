<template>
  <div>
    <form v-on:submit.prevent="login" class="form">
      <label class="form-label" for="#email">Email:</label>
      <input
        v-model.trim="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <label class="form-label" for="#password">Password:</label>
      <input
        v-model.trim="password"
        class="form-input"
        type="password"
        id="password"
        placeholder="Password"
      />
      <input class="form-submit" type="submit" value="Login" />
    </form>

    <button type="button">Register</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

interface Data {
  email: string;
  password: string;
}

export default defineComponent({
  name: "Login",
  methods: {
    ...mapActions(["loadUser"]),
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.loadUser(user);
      this.$router.push("/");
    },
  },

  data(): Data {
    return {
      email: "",
      password: "",
    };
  },
});
</script>

<style >
.form {
  padding: 5em;
}
</style>
