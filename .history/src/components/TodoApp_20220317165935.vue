<template>
    <div class="container-fluid" :style="{'background-color': bgColor}">
        <img>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      bgColor: "white"
    };
  },

};
</script>

<style scoped>

</style>