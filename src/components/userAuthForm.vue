<template>
  <div class="user-login">
    <form @submit.prevent="submitForm(loginInfo)">
      <label>
        <input v-model="loginInfo.email" type="email" placeholder="E-mail" />
      </label>
      <label>
        <input
          v-model="loginInfo.password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="Password"
        />
        <button
          @click.prevent="showPassword = !showPassword"
          class="material-icons show-password"
        >
          {{ showPassword ? "visibility_off" : "visibility" }}
        </button>
      </label>
      <button type="submit">Login</button>
    </form>
    <div v-if="getError" class="error">
      <p>{{ getError }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "userAuthForm",
  data: () => ({
    showPassword: false,
    loginInfo: {
      email: "",
      password: ""
    }
  }),
  props: {
    submitForm: {
      type: Function,
      require: true
    },
    getError: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style lang="scss">
form {
  display: grid;
  grid-auto-flow: column;
  width: 500px;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  label {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-auto-flow: column;
    margin: 0;
    padding: 0;
  }
  .show-password {
    border: none;
    background-color: transparent;
    font-size: 17px;
    color: rgba(#000, 0.5);
    outline: none;
    cursor: pointer;
    transform: translateX(-28px);
    margin-right: -28px;
  }
}
</style>
