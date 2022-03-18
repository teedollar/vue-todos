import { defineStore } from 'pinia'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  state: () => {
    return {
      dark: JSON.parse(localStorage.getItem('dark') || false),
      data: JSON.parse(localStorage.getItem('todos') || '[]'),
      filter: null
    }
  },

  getters: {
    length: state => state.data.length
  },

  actions: {
    toggleDarkMode() {
      this.dark = !this.dark
      localStorage.setItem('dark', this.dark)
    },

    addTodo(item) {
      // const exist = this.data.some(d => d.text === item.text)

      // if (exist) {
      //   alert('')
      //   return
      // }
      this.data.push({
        id: Date.now(),
        text: item.text,
        completed: item.completed
      })
      localStorage.setItem('todos', JSON.stringify(this.data))
    },

    updateTodo() {
      localStorage.setItem('todos', JSON.stringify(this.data))
    },

    removeTodo(item) {
      this.data = this.data.filter(d => d.id !== item.id)
      console.log(this.data)
      localStorage.setItem('todos', JSON.stringify(this.data))
    },

    removeAll() {
      this.data = this.data.filter(d => d.completed === false)
      localStorage.setItem('todos', JSON.stringify(this.data))
    },

    filterTodo(status) {
      this.data = JSON.parse(localStorage.getItem('todos')) || []
      if (status !== null) {
        this.data = this.data.filter(d => d.completed === status)
      }
      console.log(this.data)
    }
  }
})