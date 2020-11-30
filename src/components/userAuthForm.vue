<template>
  <div class="user-login">
    <form @submit.prevent="submitForm(userInfo)">
      <label>
        <input v-model="userInfo.email" type="email" placeholder="E-mail" />
      </label>
      <label>
        <input
          v-model="userInfo.password"
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
      <button type="submit">{{ buttonText }}</button>
    </form>
    <div v-if="ERROR" class="error">
      <p>{{ ERROR }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "userAuthForm",
  data: () => ({
    showPassword: false,
    userInfo: {
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
      type: Error,
      default: {}
    },
    getLoading: {
      type: Boolean,
      default: () => true
    },
    buttonText: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    ...mapGetters(["ERROR"])
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
