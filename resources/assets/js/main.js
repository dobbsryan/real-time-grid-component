// import io from 'socket.io-client';
// const socket = io('http://192.168.10.10:8080');

import Vue from 'vue';
import store from './vuex/store';
import App from './components/App.vue';

new Vue({
    store,
    el: 'body',
    components: { App },
});