<template>
  <div class="flex center items-center">
    <button
      class="btn-link text-opacity text-small"
      @click="handleStatus(null)"
      :class="status === null ? 'active' : ''"
    >
      All
    </button>
    <button
      class="btn-link text-opacity text-small"
      @click="handleStatus(false)"
      :class="status === false ? 'active' : ''"
    >
      Active
    </button>
    <button
      class="btn-link text-opacity text-small"
      @click="handleStatus(true)"
      :class="status === true ? 'active' : ''"
    >
      Completed
    </button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useStore } from '../store'
export default {
  setup() {
    const store = useStore()
    const status = ref(null)
    const handleStatus = value => {
      status.value = value
      store.filterTodo(status.value)
    }
    return { status, handleStatus }
  }
}
</script>