<template>
    <div class="container-fluid" :style="{'background-color': bgColor}">
        <img :src="{}">
        jgjjgj
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
      imgPath: "@/assets/images/bg-desktop-dark.jpg"
    };
  },

};
</script>

<style scoped>

</style>