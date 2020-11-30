<template>
  <div class="userAuthForm">
    <h1>Registration</h1>
    <userAuthForm
      :submit-form="registerUser"
      button-text="Register"
      :getError="getError"
      :getLoading="getLoading"
    />
  </div>
</template>

<script>
import userAuthForm from "@/components/userAuthForm";
import { mapState, mapGetters } from "vuex";
export default {
  name: "UserRegistration",
  data: () => ({
    registrationInfo: {
      email: "",
      password: ""
    }
  }),
  components: {
    userAuthForm
  },
  computed: {
    ...mapState({
      getError: "error",
      getLoading: "loading",
      currentUser: "currentUser"
    }),
    ...mapGetters(["ERROR"])
  },
  methods: {
    async registerUser(registrationInfo) {
      // eslint-disable-next-line no-console
      console.log(
        "form submitted with data:" + JSON.stringify(registrationInfo)
      );
      await this.$store.dispatch("registerUser", registrationInfo);
      if (this.getError === null && this.currentUser.error === null) {
        alert(
          "Thank you for signing in. Your ID: " +
            JSON.stringify(this.currentUser.id)
        );
      }
    }
    // async loginUser(loginInfo) {
    //   // eslint-disable-next-line no-console
    //   console.log("form submitted with data:" + JSON.stringify(loginInfo));
    //   await this.$store.dispatch("loginUser", loginInfo);
    //   if (this.getError !== null) {
    //     alert(this.getError);
    //   } else {
    //     alert(
    //       "Thank you for signing in. Your ID: " +
    //         JSON.stringify(this.currentUser.id)
    //     );
    //   }
    // }
  }
};
</script>

<style scoped></style>
<div v-if="getError" class="error">
<p>{{ getError }}</p>
</div>
