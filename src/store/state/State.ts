import IMeal from '../../interfaces/IMeal'
import IMealDetails from '../../interfaces/IMealDetails'

export default {
    query: '',
    isSpeaking: false,
    isPaused: false,
    utterance: new SpeechSynthesisUtterance(),
    foods: [] as IMeal[],
    details: [] as IMealDetails[],
    meal: {} as IMealDetails,
    favorite: [] as IMeal[]
}