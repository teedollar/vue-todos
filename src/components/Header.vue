<template>
  <header :class="store.dark ? 'img-dark' : 'img-light'">
    <div class="container flex justify-between">
      <h1 class="title">TODO</h1>
      <button class="btn-icon" @click="store.toggleDarkMode">
        <Icon :name="store.dark ? 'sun' : 'moon'" />
      </button>
    </div>
  </header>
</template>

<script>
import Icon from './Icon.vue'
import { useStore } from '../store'
export default {
  components: { Icon },
  setup() {
    const store = useStore()
    return { store }
  }
}
</script>

<style lang="css" scoped>

header {
  height: 40vh;
}
header .container {
  padding-top: 8vh;
}
.img-dark {
  background: url('@/assets/images/bg-mobile-dark.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.img-light {
  background: url('@/assets/images/bg-mobile-light.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
header .title {
  letter-spacing: 0.5rem;
  font-size: var(--fs-title);
  font-weight: var(--fw-bold);
  color: var(--clr-white);
}
@media (min-width: 760px) {
  .img-dark {
    background: url('@/assets/images/bg-desktop-dark.jpg');
  }
  .img-light {
    background: url('@/assets/images/bg-desktop-light.jpg');
  }
}
</style>