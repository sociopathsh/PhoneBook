
require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('app-header', require('./components/Header.vue'));
Vue.component('app-footer', require('./components/Footer.vue'));

const app = new Vue({
    el: '#app',
});
