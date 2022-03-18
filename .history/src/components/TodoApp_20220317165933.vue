<template>
    <div class="container-fluid" :style="{'background-color': bgColor}">
        <im
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