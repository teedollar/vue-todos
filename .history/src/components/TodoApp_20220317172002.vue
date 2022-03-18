<template>
    <div class="container-fluid" :style="{'background-color': bgColor}">
        <img src="@/assets/images/bg-desktop-dark.jpg">
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
img {
    max-width: 100%;
    margin: 0 -10px 0 -15px;
}
</style>