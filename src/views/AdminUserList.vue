<template>
  <div class="">
    <div class="" v-for="user in users" :key="user.id">
      {{ user.email }} <button @click="loginUser(user)">Login</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AdminUserList",
  computed: {
    ...mapState(["users"])
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },
  methods: {
    loginUser(user) {
      this.$store.dispatch("loginUser", user);
    }
  }
};
</script>

<style scoped></style>
