import { createStore } from 'vuex'
import state from "./state/State"
import mutations from "./mutations/Mutations"
import actions from "./actions/Actions"
import getters from './getters/Getters'


const store = createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
})

export default store;