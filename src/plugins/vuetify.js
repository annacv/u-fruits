import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vuetify.config.silent = true

export default new Vuetify({
  theme: {
    options: {
      icons: {
        iconfont: 'mdi'
      }
    }
  }
})
