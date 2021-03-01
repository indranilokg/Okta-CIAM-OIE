import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Auth from '@okta/okta-vue'

Vue.use(Auth, {
  issuer: 'https://acmecorp.twisec.com/oauth2/ausx90vikfMjKld000h7',
  clientId: '0oax90oged0zLH1b50h7',
  redirectUri: 'http://localhost:8081/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { 
    path: '/login/callback', 
    component: Auth.handleCallback() 
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())


export default router;
