import router from "../../router/Router"
import axios from 'axios'
import IMeal from '../../interfaces/IMeal'

export default {
    async getFood({ commit }: any, query: string) {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`)
            commit('SET_FOODS', response.data.meals)
        } catch (error) {
            console.error(error)
        }
    },
    async getDetails({ commit }: any, id: string) {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            commit('SET_DETAILS', response.data.meals)
        } catch (error) {
            console.error(error)
        }
    },
    async getMeal({ commit }: any, mealId: string) {
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            if (response.data.meals && response.data.meals.length > 0) {
                commit('SET_MEAL', response.data.meals[0])
            }
        } catch (error) {
            console.error(error)
        }
    },
    getAddFavorite({ commit }: any, food: IMeal) {
        let favorites = JSON.parse(localStorage.getItem('favoriteFoods') || '[]')
        if (favorites.length > 0) {
            router.push('/')
            const index = favorites.findIndex((fav: IMeal) => fav.idMeal === food.idMeal)
            if (index === -1) {
                router.push('/favorite')
                favorites.unshift(food)
                commit('SET_FAVORITE', favorites)
                localStorage.setItem('favoriteFoods', JSON.stringify(favorites))
            }
        } else {
            favorites = [food]
            commit('SET_FAVORITE', favorites)
            localStorage.setItem('favoriteFoods', JSON.stringify(favorites))
        }
    },
    getDeleteFavorite({ commit }: any, food: IMeal) {
        let favorites = JSON.parse(localStorage.getItem('favoriteFoods') || '[]')
        if (favorites.length > 0) {
            favorites = favorites.filter((f: IMeal) => f.idMeal !== food.idMeal)
            commit('SET_FAVORITE', favorites)
            localStorage.setItem('favoriteFoods', JSON.stringify(favorites))
        } else {
            commit('SET_FAVORITE', favorites)
            localStorage.setItem('favoriteFoods', JSON.stringify(favorites))
        }
    },
    getToogleVoice({ commit, state }: any, { meal, ingredients }: any) {
        if (!state.isSpeaking) {
            commit('SET_UTTERANCE', new SpeechSynthesisUtterance());
            state.utterance.text = `${meal.strMeal}. ${meal.strInstructions}.`;
            state.utterance.text += ingredients.join('. ');
            state.utterance.lang = 'en-US';
            speechSynthesis.speak(state.utterance);
            commit('SET_SPEAKING', true);
          } else if (!state.isPaused) {
            speechSynthesis.pause();
            commit('SET_PAUSED', true);
          } else {
            speechSynthesis.resume();
            commit('SET_PAUSED', false);
          }
    }
}