import Vue from 'vue';
import App from '../components/Home.vue';
import createApp from '../createApp';

Vue.config.productionTip = false;

// this assumes App.vue template root element has `id="app"`
createApp(App).$mount('#app');
