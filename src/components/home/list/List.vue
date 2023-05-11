<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { defineComponent } from 'vue'
import store from '../../../store/Store'
import IMeal from "../../../interfaces/IMeal"

export default defineComponent({
    computed: {
        ...mapGetters(['details', 'favorite']),
        foods(): IMeal[] {
            return store.getters.foods
        }
    },
    methods: {
        ...mapActions(['getDetails', 'getAddFavorite']),
        updateDetails(id: string) {
            store.commit('SET_DETAILS', id)
            store.dispatch('getDetails', store.getters.details)
        },
        addFavorite(food: IMeal) {
            store.commit('SET_FAVORITE', food)
            store.dispatch('getAddFavorite', store.getters.favorite)
        },
    },
})
</script>

<template>
    <section class="section_list">
        <article class="section_list_meal" v-for="food in foods" :key="(food as IMeal).idMeal">
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
                <button type="button" class="button_hover" @click="addFavorite(food)"><font-awesome-icon class="heart_icon" icon="fa-solid fa-heart" /></button>
            </div>
        </article>
    </section>
</template>

<style lang="scss">
@use "/src/styles/mixins.scss" as mixins;
@include mixins.listStyle;
</style>