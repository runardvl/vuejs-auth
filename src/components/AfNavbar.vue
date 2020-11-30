<template>
  <nav id="nav" class="nav">
    <div class="logo-avatar">
      <span
        v-if="currentUser.token"
        style="width: 300px; overflow-x: hidden"
        class="logo"
        >{{ "Authorized with id: " + currentUser.id }}</span
      >
      <router-link class="no-user" v-else to="/login">No user</router-link>
    </div>

    <ul>
      <li><router-link to="/">Home</router-link> |</li>
      <li><router-link to="/about">About</router-link> |</li>
      <li><router-link to="/admin/users">Admin panel</router-link> |</li>
      <li v-if="currentUser.token">
        <button @click.prevent="logoutUser">Logout</button>
      </li>
      <li v-if="!currentUser.token">
        <router-link to="/login">Login</router-link> |
        <router-link to="/registration">Registration</router-link>
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
  .logo-avatar {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: max-content;
    grid-gap: 10px;
  }
  .no-user {
    text-decoration: none;
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
