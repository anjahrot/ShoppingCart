import App from '../App.jsx';
import Shop from './shop/shop.jsx';
import Home from './homepage/home.jsx';
import ShoppingCart from './shoppingCart/shoppingCart.jsx';
import ErrorPage from './errorPage.jsx';



const routes = [
  {
    path: "/",
    element: <App />,
    children: [
         { 
            index: true, 
            element: <Home />},
         {
            path: "/shop",
            element: <Shop />,
         },
         {
            path: "/shoppingCart",
            element: <ShoppingCart />,
         }

    ],
    errorElement: <ErrorPage />,
  },
  
];

export default routes;