import Hello from '../views/Hello';
import NoMatch from '../views/404';
import Home from '../views/home';
const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Hello",
    component: Hello,
    routes: [
      {
        path: "/Hello/bus",
        component: Bus
      },
      {
        path: "/cart",
        component: Cart
      }
    ]
  },
  {
    path: "*",
    component: NoMatch
  }
];

export default routes;