<template>
  <div class="container">
    <input
      type="file"
      id="file"
      ref="file"
      @change="uploadFile(fieldName, $event.target.files)"
    />
    <button v-on:click="submitFile()">Submit</button>
  </div>
</template>

<script>
export default {
  name: "serverFileUpload",
  data() {
    return {};
  },
  props: {
    fieldName: {
      type: String,
      default: () => ""
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    uploadFile(fieldName, files) {
      // eslint-disable-next-line no-unused-vars
      let file = files[0];
      // TODO: upload it to server
      //Get the URL for the file
      this.obj[fieldName] = file.name;
      console.log(this.$refs.file.files[0]);
    },
    submitFile() {}
  }
};
</script>
