import Vue from 'vue';
import Home from './components/Home.vue';
import About from './components/About.vue';

export default (context) => {

    console.log(context.page);
    const pages = {
        home: { App: Home },
        about: { App: About }
    };

    return new Vue({
        components: pages[context.page || 'home'],
        template: '<App/>'
    });

};
