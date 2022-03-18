<template>
    <div class="container-fluid" :style="{'background-color': bgColor}">
        
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
      
    };
  },

};
</script>

<style scoped>

.container-fluid{

}

.container{
    color: red;
}
</style>