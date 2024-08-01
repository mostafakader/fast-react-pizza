// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './ui/Home';
// import Error from './ui/Error';
// import Menu, { loader as menuLoader } from './features/menu/Menu';
// import Cart from './features/cart/Cart';
// import CreateOrder, {
//   action as createOrderAction,
// } from './features/order/CreateOrder';
// import { action as updateOrderAction } from './features/order/UpdateOrder';
// import Order, { loader as orderLoader } from './features/order/Order';
// import AppLayout from './ui/AppLayout';

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/menu',
//         element: <Menu />,
//         loader: menuLoader,
//         errorElement: <Error />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//       {
//         path: '/order/new',
//         element: <CreateOrder />,
//         action: createOrderAction,
//       },
//       {
//         path: '/order/:orderId',
//         element: <Order />,
//         loader: orderLoader,
//         errorElement: <Error />,
//         action: updateOrderAction,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, { action as createOrderAction } from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu />, loader: menuLoader, errorElement: <Error /> },
      { path: '/cart', element: <Cart /> },
      { path: '/order/new', element: <CreateOrder />, action: createOrderAction },
      { path: '/order/:orderId', element: <Order />, loader: orderLoader, errorElement: <Error />, action: updateOrderAction },
    ],
  },
], {
  basename: '/fast-react-pizza', // تأكد من أن هذا المسار يطابق المسار الأساسي في GitHub Pages
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;

