<template>
  <div class="user-login">
    <h1>Login</h1>
    <user-auth-form
      :getError="getError"
      :get-loading="getLoading"
      :submitForm="loginUser"
      :currentUser="currentUser"
      buttonText="Login"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import userAuthForm from "@/components/userAuthForm";

export default {
  name: "UserLogin",
  components: { userAuthForm },
  computed: {
    ...mapState({
      getError: "error",
      getLoading: "loading",
      currentUser: "currentUser"
    })
  },
  methods: {
    async loginUser(loginInfo) {
      // eslint-disable-next-line no-console
      console.log("form submitted with data:" + JSON.stringify(loginInfo));
      await this.$store.dispatch("loginUser", loginInfo);
      if (this.getError !== null) {
        alert(this.getError);
      } else {
        alert(
          "Thank you for signing in. Your ID: " +
            JSON.stringify(this.currentUser.id)
        );
      }
    }
  }
};
</script>

<style lang="scss"></style>
