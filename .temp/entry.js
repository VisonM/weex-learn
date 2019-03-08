import Vue from 'vue'
import weex from 'weex-vue-render'
/*global Vue*/

weex.init(Vue)
/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');
import mixins from '@/mixins/index.js'
/* eslint-disable no-new */
Vue.mixin(mixins)
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

