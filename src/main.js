import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router';
import './style.css'
import routes from './routes/routes';

const router = createRouter({
    history: createWebHashHistory(),
    router: routes,
})
const app = createApp();
app.use(router);

app.mount('#app')
