<template>
  <div
    class="checkbox flex center items-center"
    :class="checked ? 'checked' : ''"
    @click.native="$emit('toggle')"
  >
    <Icon name="check" v-if="checked" />
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  components: { Icon },
  props: ['checked']
}
</script>
<style scoped>
.checkbox {
  position: relative;
  border: 2px solid var(--bg-light);
  border-radius: 50%;
  width: 18px;
  height: 18px;
}
.checkbox.checked {
  background-color: var(--clr-primary);
  border: 0;
}
</style>