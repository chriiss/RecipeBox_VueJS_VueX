<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { defineComponent } from 'vue'
import store from '../../store/Store'
import IMeal from '../../interfaces/IMeal'

export default defineComponent({
    data() {
        return {
            queryFav: "",
        }
    },
    computed: {
        ...mapGetters(['details', 'favorite']),
        favorite(): IMeal[] {
            return store.getters.favorite
        },
        filteredFavorite(): IMeal[] {
            return this.favorite.filter((food: IMeal) => food.strMeal.toLowerCase().includes(this.queryFav.toLowerCase()))
        }
    },
    methods: {
        ...mapActions(['getDetails', 'getDeleteFavorite']),
        updateDetails(id: string) {
            store.commit('SET_DETAILS', id)
            store.dispatch('getDetails', store.getters.details)
        },
        deleteFavorite(food: IMeal) {
            store.commit('SET_FAVORITE', food)
            store.dispatch('getDeleteFavorite', store.getters.favorite)
            localStorage.setItem('favoriteFoods', JSON.stringify(store.getters.favorite))
        }
    },
    mounted() {
        const storedFavorites = localStorage.getItem('favoriteFoods')
        storedFavorites ? store.commit('SET_FAVORITE', JSON.parse(storedFavorites)) : null
    },
})
</script>

<template>
    <section>
        <router-link to="/">
            <button class="back button_hover"><font-awesome-icon icon="fa-solid fa-arrow-left" />&nbsp;Back</button>
        </router-link>
        <h1 class="header_title text-center"><font-awesome-icon icon="fa-solid fa-heart" />&nbsp;Favorite&nbsp;<font-awesome-icon icon="fa-solid fa-heart" /></h1>
        <section class="header">
            <div class="header_searchbox">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <input type="search" v-model="queryFav" placeholder="search favorite meal" />
            </div>
        </section><br/>
        <section class="section_list">
        <article class="section_list_meal" v-for="food in filteredFavorite" :key="(food as IMeal).idMeal">
            <div class="section_list_meal_name text-center">
                <h2>{{ (food as IMeal).strMeal }}</h2>
            </div>
            <div class="section_list_meal_img">
                <img :src="(food as IMeal).strMealThumb" :alt="(food as IMeal).strMeal" />
            </div>
            <div class="section_list_meal_button_group">
                <router-link :to="`/details/${(food as IMeal).idMeal}`">
                    <button type="button" class="button_hover" @click="updateDetails((food as IMeal).idMeal)">More info</button>
                </router-link>
                <button type="button" class="button_hover" @click="deleteFavorite(food)"><font-awesome-icon icon="fa-solid fa-trash" /></button>
            </div>
        </article>
    </section>
    </section>
</template>

<style lang="scss">
@use "/src/styles/mixins.scss" as mixins;
@include mixins.backStyle;
@include mixins.headerStyle;
@include mixins.listStyle;
</style>