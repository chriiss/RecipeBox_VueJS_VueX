<script lang="ts">
import { defineComponent } from 'vue'
import DataJson from "../../data/DataJson.json"
export default defineComponent({
    name: 'Navbar',
    data() {
        return {
            lists: DataJson
        }
    }
})
</script>

<template>
    <nav class="navbar">
        <ul class="navbar_list" v-for="list in lists.navbarComponent.list" :key="list.name">
            <li :class="{ 'route_active': $route.path === list.path }">
                <router-link :to="list.path">
                    <div class="list_item link">
                        <div><font-awesome-icon :icon="list.icon" /></div>
                        <div>{{ list.name }}</div>
                    </div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@use "/src/styles/mixins.scss" as mixins;
@include mixins.navbarStyle;
</style>