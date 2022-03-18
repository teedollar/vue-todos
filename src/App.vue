<template>
  <div class="app" :class="store.dark ? 'dark-theme' : ''">
    <Header />
    <main class="container">
      <add-todo />
      <section v-if="store.length">
        <div class="list">
          <!-- Draggable -->
          <draggable
            :list="store.data"
            item-key="id"
            @start="dragging = true"
            @end="dragging = false"
            class="list"
            ghost-class="ghost"
          >
            <template #item="{ element }">
              <TodoItem
                :item="element"
                @update="store.updateTodo"
                @remove="store.removeTodo"
              />
            </template>
          </draggable>
          <!-- Footer and Filter -->
          <div
            class="box flex justify-between items-center text-opacity text-small list-footer"
          >
            <span class="">{{ store.length }} items left</span>
            <Filter class="md-show" />
            <button
              class="btn-link text-opacity text-small"
              @click="store.removeAll"
            >
              Clear Completed
            </button>
          </div>
        </div>
        <!-- Filter -->
        <div class="box rounded mt-1 flex items-center center sm-show">
          <Filter />
        </div>
      </section>
    </main>
    <footer class="container text-opacity flex center">
      <span>Drag and drop to reorder list</span>
    </footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import AddTodo from './components/AddTodo.vue'
import TodoItem from './components/TodoItem.vue'
import Filter from './components/Filter.vue'
import { useStore } from './store'
import draggable from 'vuedraggable'
export default {
  components: { Header, AddTodo, TodoItem, Filter, draggable },
  setup() {
    const store = useStore()
    return { store }
  }
}
</script>

<style lang="css" scoped>
main {
  margin-top: -20vh;
  min-height: 30vh;
}
.list > *:is(:first-child) {
  border-radius: 0.2rem 0.2rem 0 0;
}
.list > *:not(:last-child) {
  border-bottom: 1px solid var(--bg-light);
}
.list-footer {
  border-radius: 0 0 0.2rem 0.2rem;
}
.sm-show {
  visibility: visible;
  opacity: 1;
  display: flex;
}
.md-show {
  visibility: hidden;
  opacity: 0;
  display: none;
}
.ghost {
  opacity: 0.5;
  background: var(--bg-secondary);
}
footer {
  padding: 1rem 0;
}
@media (min-width: 760px) {
  .sm-show {
    visibility: hidden;
    opacity: 0;
    display: none;
  }
  .md-show {
    visibility: visible;
    opacity: 1;
    display: flex;
  }
}
</style>