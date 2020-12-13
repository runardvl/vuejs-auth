<template>
  <div class="about">
    <h1>Account</h1>
    <server-file-upload :obj="image" fieldName="image" />
  </div>
</template>

<script>
import serverFileUpload from "@/components/serverFileUpload";

export default {
  name: "Account",
  components: {
    serverFileUpload
  },
  data() {
    return {
      image: {}
    };
  }
};
</script>
