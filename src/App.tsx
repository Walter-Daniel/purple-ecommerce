import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Routes/Router';
import { NotificationProvider } from './context/notification.context';
import { ProductsProvider } from './context/ProductsProvider';

function App() {

  return (
    <ProductsProvider>
      <NotificationProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </NotificationProvider>   
    </ProductsProvider>
  )
}

export default App
