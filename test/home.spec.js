import expect from 'expect';
import Vue from 'vue';
import Home from '../src/components/Home.vue';


function getRendered(Component, propsData) {
    const Constructor = Vue.extend(Component);
    const vm = new Constructor({ propsData }).$mount();
    return vm.$el.textContent;

}

describe('Home', () => {
    it('renders correctly with different props', () => {
        expect(getRendered(Home, {
            msg: 'Hello'
        })).toBe('home Hello  Hello World! Say hi');

        expect(getRendered(Home, {
            msg: 'Bye'
        })).toBe('home Bye  Hello World! Say hi');
    });
});
