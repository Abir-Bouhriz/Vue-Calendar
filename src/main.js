import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyApOcf4r3_jI4RZSvf_J7N0DCTdU7UvJqo",
  authDomain: "vue-calendar-5d7a0.firebaseapp.com",
  projectId: "vue-calendar-5d7a0",
  storageBucket: "vue-calendar-5d7a0.appspot.com",
  messagingSenderId: "771335483152",
  appId: "1:771335483152:web:3fc76f5a19a2e47fa17f95",
  measurementId: "G-11DTKM7YM0"
});

export const db = firebase.firestore();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
