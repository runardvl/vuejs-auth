<template>
  <nav id="nav" class="nav">
    <span
      style="width: 300px; overflow-x: hidden"
      v-if="currentUser.access_token"
      class="logo"
      >{{
        "Current User has only access token. P.S. Parked in localStorage"
      }}</span
    >
    <router-link v-else to="/login">No user</router-link>

    <ul>
      <li><router-link to="/">Home</router-link> |</li>
      <li><router-link to="/about">About</router-link> |</li>
      <li><router-link to="/admin/users">Admin panel</router-link> |</li>
      <li><router-link to="/register">Register</router-link> |</li>
      <li v-if="!currentUser.access_token">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="currentUser.access_token">
        <button @click.prevent="logoutUser">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AfNavbar",
  props: {
    currentUser: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({}),
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    }
  }
};
</script>

<style lang="scss">
nav {
  width: 1280px;
  display: grid;
  grid-auto-flow: column;
  justify-items: stretch;
  align-items: center;
  .logo {
    width: max-content;
  }
}
ul {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, max-content);
  justify-self: end;
  grid-gap: 10px;
  li {
    list-style: none;
  }
}
</style>
