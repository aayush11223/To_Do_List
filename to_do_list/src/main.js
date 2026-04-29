import Vue from 'vue'
import App from './App.vue'



import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faEdit, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')