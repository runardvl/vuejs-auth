<template>
  <form @submit.prevent="loginUser">
    <label>
      <input v-model="loginInfo.email" type="email" placeholder="E-mail" />
    </label>
    <label>
      <input
        v-model="loginInfo.password"
        type="password"
        placeholder="Password"
      />
    </label>
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  name: "UserLogin",
  data: () => ({
    loginInfo: {
      email: "",
      password: "",
      token: null
    }
  }),
  methods: {
    async loginUser() {
      // eslint-disable-next-line no-console
      console.log("form submitted");
      let user = await this.$store.dispatch("loginUser", this.loginInfo);
      if (user.error) {
        alert(user.error);
      } else {
        // await this.$router.push("/");
        alert("Thank you for signing in, " + user);
      }
    }
  }
};
</script>

<style lang="scss">
form {
  display: grid;
  grid-auto-flow: column;
  width: 500px;
}
</style>
