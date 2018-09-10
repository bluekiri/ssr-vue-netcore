import Vue from 'vue';
import App from './components/Home.vue';

Vue.config.productionTip = false;

// client-specific bootstrapping logic...
const app = new Vue({
    // the root instance simply renders the App component.
    render: h => h(App)
});

// this assumes App.vue template root element has `id="app"`
app.$mount('#app');
