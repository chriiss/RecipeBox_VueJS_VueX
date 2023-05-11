<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { useRouter } from 'vue-router'
import store from "../../store/Store"

export default defineComponent({
    setup() {
        const router = useRouter()

        router.beforeEach(() => {
            speechSynthesis.cancel()
        })
    },
    created() {
        store.commit('SET_MEAL', this.$route.params.id)
        store.dispatch('getMeal', this.$route.params.id)
        window.addEventListener('beforeunload', this.stopVoice)
    },
    computed: {
        ...mapGetters(['isSpeaking', 'isPaused', 'utterance']),
        speak() {
            return store.getters.isSpeaking
        },
        pause() {
            return store.getters.isPaused
        },
        utterance() {
            return store.getters.utterance
        },
        meal() {
            return store.getters.meal
        },

        ingredients() {
            const ingredients = []
            for (let i = 1; i <= 20; i++) {
                const ingredient = this.meal[`strIngredient${i}` as keyof typeof this.meal]
                const measure = this.meal[`strMeasure${i}` as keyof typeof this.meal]
                if (ingredient) {
                    ingredients.push(`${ingredient} : ${measure}`)
                }
            }
            return ingredients
        },
    },
    methods: {
        ...mapActions(['getToogleVoice']),
        toggleVoice() {
            store.dispatch('getToogleVoice', { meal: this.meal, ingredients: this.ingredients })
        },
        stopVoice() {
            speechSynthesis.cancel()
        },
    },
    beforeUnmount() {
        window.removeEventListener('beforeunload', this.stopVoice)
        window.location.reload()
    },
})
</script>


<template>
    <section class="section_details">
        <router-link to="/"><button type="button" class="back">
                <font-awesome-icon icon="fa-solid fa-arrow-left" />&nbsp;back</button>
        </router-link>
        <article class="section_details_article">
            <div class="section_details_article_item">
                <h2>{{ meal.strMeal }}</h2>
            </div>
            <div class="section_details_article_instruction">
                <div class="section_details_article_instruction_item">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" />
                </div>
                <div class="section_details_article_instruction_item">
                    <div>{{ meal.strInstructions }}</div>
                    <div>
                        <button type="button" @click="toggleVoice()">
                            <span v-if="!speak"><font-awesome-icon icon="fa-solid fa-volume-up" /></span>
                            <span v-else-if="pause"><font-awesome-icon icon="fa-solid fa-volume-up" /></span>
                            <span v-else><font-awesome-icon icon="fa-solid fa-pause" /></span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
        <article class="section_details_article">
            <h2>Ingredients</h2>
            <ul class="section_details_article_list">
                <li v-for="(ingredient, index) in ingredients" :key="index">
                    {{ ingredient }}
                </li>
            </ul>
        </article>
    </section>
</template>

<style lang="scss">
@use "../../styles/mixins.scss" as mixins;
@include mixins.backStyle;
@include mixins.detailsStyle;
</style>