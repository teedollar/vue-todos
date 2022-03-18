<template>
    <div class="container-fluid" :style="{'background-color': bgColor}">
        <img class="-mg-top" src="@/assets/images/bg-desktop-dark.jpg">
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
    margin: 0 -30px 0 -15px;
}
</style>