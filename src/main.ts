import { createApp } from 'vue'
import App from './App.vue'
import router from './router/Router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faMitten, faHeart, faTrash, faArrowLeft, faHouse, faVolumeUp, faPause, faArrowUp } from '@fortawesome/free-solid-svg-icons'
library.add(faMagnifyingGlass)
library.add(faMitten)
library.add(faHeart)
library.add(faTrash)
library.add(faArrowLeft)
library.add(faHouse)
library.add(faVolumeUp)
library.add(faPause)
library.add(faArrowUp)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

