import { createApp } from 'vue'
import App from './layouts/App.vue'
import router from "@/router/router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import NProgress from "nprogress";
import VueSweetalert2 from 'vue-sweetalert2'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/css/style.css"
import "./assets/css/default.css"
import "./assets/css/responsive.css"
import 'nprogress/nprogress.css';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App)
    .use(router)
    .use(VueAxios, axios)
    .use(VueSweetalert2);

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

window.Swal = app.config.globalProperties.$swal;

axios.interceptors.request.use(config => {
    NProgress.start();
    return config;
}, (error) => {
    NProgress.done();
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    NProgress.done();
    return response;
}, function (error) {
    NProgress.done();
    window.Swal.fire({
        title: error?.response?.data?.message ?? 'Hata Oluştu!',
        text: error?.response?.data?.text ?? 'Bir Hata Oluştu',
        showConfirmButton: false,
        timer: 3000,
        icon: "error",
        position: 'top-end',
    });
    return Promise.reject(error);
});

app.mount('#app')

