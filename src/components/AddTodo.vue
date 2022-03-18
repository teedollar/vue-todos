
<template>
  <form
    @submit.prevent="onSubmit"
    id="add-todo"
    class="box rounded flex items-center"
  >
    <Checkbox
      :checked="todo.completed"
      @toggle="todo.completed = !todo.completed"
    />
    <input type="text" v-model="todo.text" placeholder="Create a new todo..." />
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from '../store'
import Checkbox from './Checkbox.vue'
export default {
  components: { Checkbox },
  setup() {
    const store = useStore()
    const todo = ref({
      text: '',
      completed: false
    })
    const onSubmit = () => {
      // let item = todo.value
      if (todo.value.text != '') {
        store.addTodo(todo.value)
        todo.value.text = ''
        todo.value.completed = false
      }
    }
    return {
      todo,
      onSubmit
    }
  }
}
</script>

<style lang="css" scoped>
#add-todo {
  margin-bottom: 2rem;
}
input {
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--txt-primary);
}
input::placeholder {
  opacity: 0.8;
}
</style>