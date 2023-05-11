<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { defineComponent } from 'vue'
import store from '../../../store/Store'

export default defineComponent({
    computed: {
        ...mapGetters(['query', 'foods'])
    },
    methods: {
        ...mapActions(['getFood']),
        updateQuery(event: Event) {
            const target = event.target as HTMLInputElement | null
            if (target) {
                store.commit('SET_QUERY', target.value)
                store.dispatch('getFood', store.getters.query)
            }
        }
    },
})
</script>

<template>
    <header class="header">
        <h1 class="header_title"><font-awesome-icon icon="fa-solid fa-mitten" /> RecipeBox</h1>
        <div class="header_searchbox">
            <font-awesome-icon class="header_searchbox_search_icon" icon="fa-solid fa-magnifying-glass" />
            <input type="search" placeholder="Search meal per countries ex: canadian" @input="updateQuery($event)" />
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "/src/styles/mixins.scss" as mixins;
@include mixins.headerStyle;
</style>