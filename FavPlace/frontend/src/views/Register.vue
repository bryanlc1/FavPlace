<template>
  <div>
    <form action class="form" v-on:submit.prevent="register">
      <input
        v-model="name"
        class="form-input"
        type="text"
        required
        placeholder="Nombre"
      />
      <input
        v-model="lastName"
        class="form-input"
        type="text"
        required
        placeholder="Apellido"
      />
      <input
        v-model="email"
        class="form-input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <input
        v-model="password"
        class="form-input"
        type="password"
        id="password"
        required
        placeholder="Password"
      />
      <input class="form-submit" type="submit" value="Sign Up" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "Register",

  methods: {
    ...mapActions(["registerUser"]),

    register() {
      try {
        const userData = {
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          error: false,
        };
        this.registerUser(userData);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },

  data(): any {
    return {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };
  },
});
</script>


<style>
</style>