import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
import WeightForm from './components/WeightForm.vue';
import WeightChart from './components/WeightChart.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/registro', component: WeightForm },
  { path: '/grafico', component: WeightChart },
];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  created() {
    this.$store.dispatch('initializeWeightData');
  },
  render: (h) => h(App),
}).$mount('#app');
