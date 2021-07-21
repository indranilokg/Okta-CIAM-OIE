import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import sampleConfig from '@/config'

//import Auth from '@okta/okta-vue'

import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue, { LoginCallback } from '@okta/okta-vue'

/*Vue.use(Auth, {
  issuer: 'https://oiett-ijha-ok2.trexcloud.com/oauth2/aus7x5wgqpogcQ0ZB0w6',
  clientId: '0oa7x5i60INlGHXEN0w6',
  redirectUri: 'http://localhost:8080/login/callback',
  scopes: ['openid', 'profile', 'email'],
  pkce: true
})*/

const oktaAuth = new OktaAuth(sampleConfig.oidc)

Vue.use(VueRouter);
Vue.use(OktaVue, { oktaAuth })

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { 
    path: '/login/callback', 
    component: LoginCallback
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

//router.beforeEach(Vue.prototype.$auth.authRedirectGuard())


export default router;
