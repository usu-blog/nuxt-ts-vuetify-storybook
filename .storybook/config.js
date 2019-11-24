import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { setConsoleOptions } from '@storybook/addon-console'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'

// 追加
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css' // →これ重要

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>'
})

Vue.component('router-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    }
  },
  template: '<a href="#" @click.prevent="log()"><slot>RouterLink</slot></a>'
})

// 依存注入
Vue.use(Vuetify)

addDecorator(() => ({
  vuetify: new Vuetify(),
  template: `
<v-app>
    <story/>
</v-app>
`
}))

setConsoleOptions({
  panelExclude: []
})

addDecorator(withKnobs)

addDecorator(withInfo)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module)
