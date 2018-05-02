require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';

import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);

const app = new Vue({
    el: '#app',
    router: router
});
