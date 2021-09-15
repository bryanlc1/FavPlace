<template>
  <div class="register">
    <form action class="form" v-on:submit.prevent="register" data-test="register">
      <input
        v-model="name"
        class="form__input"
        type="text"
        required
        placeholder="Nombre"
      />
      <input
        v-model="lastName"
        class="form__input"
        type="text"
        required
        placeholder="Apellido"
      />
      <input
        v-model="email"
        class="form__input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <input
        v-model="password"
        class="form__input"
        type="password"
        id="password"
        required
        placeholder="Password"
      />
      <button class="form-submit" type="submit">Registrarse</button>
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
      const userData = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        error: false,
      };
      this.registerUser(userData);
      this.$router.push("/");
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
.register {
  display: flex;
  margin: 15vh auto;
  max-width: 980px;
  flex-direction: column;
  align-items: center;
}
</style>