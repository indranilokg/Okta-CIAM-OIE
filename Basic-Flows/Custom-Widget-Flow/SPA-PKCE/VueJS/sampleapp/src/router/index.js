import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Auth from "@okta/okta-vue";
import { OktaAuth } from '@okta/okta-auth-js';
import LoginComponent from "@/components/Login";
import { LoginCallback } from '@okta/okta-vue'

const oktaAuth = new OktaAuth({
  issuer: "https://acmecorp.twisec.com/oauth2/ausx90vikfMjKld000h7",
  clientId: "0oax7szi44siifGwt0h7",
  redirectUri: "http://localhost:8080/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true
})


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    component: LoginComponent
  },
  { 
    path: "/login/callback", 
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

Vue.use(VueRouter);

Vue.use(Auth, { oktaAuth,
  onAuthRequired: () => {
    router.push({ path: '/login' })
  }
})


//router.beforeEach(onAuthRequired);
//router.beforeEach(Vue.prototype.$auth.authRedirectGuard())


export default router;
