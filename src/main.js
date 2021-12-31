import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import pinDirective from './shared/pin-directive';
import currencyFilter from './shared/currency-filter';

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency: currencyFilter,
};

app.use(router)
  .use(store)
  .directive('pin', pinDirective)
  .mount('#app'); // * returns newly created vue app

//  * example of registering a component a global component
//  * Global variables should be avoided as it increases bundle size
//  * Only use global IF truly global and needed to avoid naming issues and more...
// const app = createApp(App).mount("#app");
// app.component('HomePage', HomePage);
