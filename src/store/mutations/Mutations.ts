import IMeal from '../../interfaces/IMeal'
import IMealDetails from '../../interfaces/IMealDetails'

export default {
    SET_QUERY(state: any, value: string) {
        state.query = value
    },
    SET_FOODS(state: any, value: IMeal[]) {
        state.foods = value
    },
    SET_DETAILS(state: any, value: IMealDetails[]) {
        state.details = value
    },
    SET_MEAL(state: any, value: IMealDetails) {
        state.meal = value
    },
    SET_FAVORITE(state: any, value: IMeal[]) {
        state.favorite = value
    },
    SET_SPEAKING(state: any, value: boolean) {
        state.isSpeaking = value
    },
    SET_PAUSED(state: any, value: boolean) {
        state.isPaused = value
    },
    SET_UTTERANCE(state: any, value: any) {
        state.utterance = value
    },
}