<script lang="ts">
import { defineComponent } from 'vue';
import List from './list/List.vue';
import SearchBox from './searchBox/SearchBox.vue'

export default defineComponent({
  components: {
    SearchBox,
    List
  },
})
</script>

<template>
  <SearchBox />
  <List />
</template>

<style scoped lang="scss">
</style>
