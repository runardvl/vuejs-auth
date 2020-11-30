<template>
  <div class="user-login">
    <user-auth-form
      :error="getError"
      :submitForm="loginUser"
      :currentUser="getCurrentUser"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import userAuthForm from "@/components/userAuthForm";

export default {
  name: "UserLogin",
  data: () => ({
    loginInfo: {
      email: "",
      password: ""
    }
  }),
  components: { userAuthForm },
  computed: {
    ...mapState({
      getError: "error",
      getLoading: "loading",
      getCurrentUser: "currentUser"
    })
  },
  methods: {
    async loginUser(loginInfo) {
      // eslint-disable-next-line no-console
      console.log("form submitted");
      await this.$store.dispatch("loginUser", loginInfo);
    }
  }
};
</script>

<style lang="scss"></style>
