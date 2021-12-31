import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import HomePage from './components/HomePage.vue'; // * need to import component to make it global

createApp(App)
  .use(router)
  .use(store)
  .mount('#app'); // * returns newly created vue app

//  * example of registering a component a global component
//  * Global variables should be avoided as it increases bundle size
//  * Only use global IF truly global and needed to avoid naming issues and more...
// const app = createApp(App).mount("#app");
// app.component('HomePage', HomePage);
