import './App.css';
import {  RouterProvider } from 'react-router-dom';
import {  router } from './Routes/Router';
import { NotificationProvider } from './context/notification.context';
import { ProductsProvider } from './context/ProductsProvider';

function App() {

  return (
    <ProductsProvider>
      <NotificationProvider>
        <RouterProvider router={router}/>
      </NotificationProvider>   
    </ProductsProvider>
  )
}

export default App
