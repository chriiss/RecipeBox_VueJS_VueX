<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/navbar/Navbar.vue'
import TopButton from './components/topButton/TopButton.vue';
export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    TopButton
  }
})
</script>

<template>
  <router-view />
  <TopButton />
  <Navbar/>
</template>

<style lang="scss">
* {
  font-family: 'Mukta', sans-serif;
  list-style-type: none;
  text-decoration: none;
}
.text-center {
  text-align: center;
}
</style>