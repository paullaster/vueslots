import Home from  "../Home";
import 
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/user',
        component: User
    },
    {
        path: '/user/:id',
        component: SingleUser
    }
];
export default routes;