import IState from "../../interfaces/IState"

export default {
    query: (state: IState) => state.query,
    foods: (state: IState) => state.foods,
    details: (state: IState) => state.details,
    meal: (state: IState) => state.meal,
    favorite: (state: IState) => state.favorite,
    isSpeaking: (state: IState) => state.isSpeaking,
    isPaused: (state: IState) => state.isPaused,
    utterance: (state: IState) => state.utterance,
}