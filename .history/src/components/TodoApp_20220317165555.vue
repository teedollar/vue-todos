<template>
    <div class="container-fluid" :style="{'background-color':Your_Variable_Name}">
        
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