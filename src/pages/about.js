import Vue from 'vue';
import About from '../components/About.vue';
import createApp from '../createApp';

Vue.config.productionTip = false;

createApp(About).$mount('#app');
