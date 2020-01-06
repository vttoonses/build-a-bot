import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  }],
});
