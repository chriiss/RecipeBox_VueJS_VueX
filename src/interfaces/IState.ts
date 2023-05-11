import IMeal from "./IMeal"
import IMealDetails from "./IMealDetails"

interface IState {
    query: string,
    isSpeaking: boolean,
    isPaused: boolean,
    utterance: any,
    foods: IMeal[]
    details: IMealDetails,
    meal: IMealDetails,
    favorite: IMeal[]
}

export default IState;
