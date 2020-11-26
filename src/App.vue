<template>
  <div id="app">
    <af-navbar :currentUser="currentUser" />

    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import AfNavbar from "@/components/AfNavbar";

export default {
  name: "App",
  computed: {
    ...mapState(["currentUser"])
  },
  components: {
    AfNavbar
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  justify-items: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
