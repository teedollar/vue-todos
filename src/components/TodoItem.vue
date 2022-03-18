<template>
  <div class="box table flex justify-between items-center">
    <div class="flex items-center">
      <Checkbox :checked="item.completed" @toggle="handleCompleted" />
      <span :class="item.completed ? 'checked' : ''">{{ item.text }}</span>
    </div>
    <button class="btn-icon" @click.prevent="store.removeTodo(item)">
      <Icon name="cross" />
    </button>
  </div>
</template>

<script>
import { useStore } from '../store'
import Icon from './Icon.vue'
import Checkbox from './Checkbox.vue'
export default {
  components: { Icon, Checkbox },
  props: {
    item: Object
  },
  setup(props) {
    const store = useStore()
    const handleCompleted = () => {
      props.item.completed = !props.item.completed
      store.updateTodo()
    }
    return { store, handleCompleted }
  }
}
</script>
<style scoped>
.checked {
  text-decoration: line-through;
  color: var(--txt-secondary);
}
</style>