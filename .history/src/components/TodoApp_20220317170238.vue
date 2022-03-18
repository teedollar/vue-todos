<template>
    <div class="container-fluid" :style="{'background-color': bgColor}">
        <img src="{{imgPath}}">
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
      bgColor: "white",
      imgPath: "./ass"
    };
  },

};
</script>

<style scoped>

</style>