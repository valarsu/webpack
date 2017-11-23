{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#router}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}

{{#mtue}}
import MuseUI from 'muse-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import axios from 'axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueAxios from 'vue-axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'muse-ui/dist/muse-ui.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'muse-ui/dist/theme-default.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueWechatTitle from 'vue-wechat-title'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(MuseUI){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueWechatTitle){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueAxios, axios){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/mtue}}
Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
