<template>
  <div class="login">
    <form v-on:submit.prevent="login" class="form">
      <input
        v-model.trim="email"
        class="form__input"
        type="email"
        id="email"
        required
        placeholder="Email"
      />
      <input
        v-model.trim="password"
        class="form__input"
        type="password"
        id="password"
        placeholder="Password"
      />
      <button class="form-submit" type="submit">Login</button>
    </form>
    <button
      class="form-register"
      type="button"
      value="Registrarse"
      @click="this.$router.push('/register')"
    >
      Registrarse
    </button>
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
.login {
  display: flex;
  margin: 15vh auto;
  max-width: 980px;
  flex-direction: column;
  align-items: center;
}
.form-submit {
  width: 5vw;
}
.form-register {
  width: 100%;
}
</style>
