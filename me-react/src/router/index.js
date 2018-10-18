import Hello from '../views/Hello';
import NoMatch from '../views/404';
import Home from '../views/home';

const routes = [
    {
      path: "/Home",
      component: Home,
    },
    {
      path: "/Hello",
      component: Hello,
    },
    {
        path: "*",
        component: NoMatch
    }
];

export default routes;