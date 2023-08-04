import { createBrowserRouter } from 'react-router-dom';
import { AuthRoutes, AdminRoutes, GeneralRoutes } from './Conditions.routes';
import { RouterLayout } from '../common/RouterLayout';
import { CartPage, ErrorPage, HomePage, LoginPage, ProductsPage, RegisterPage } from '../pages';

export const router= createBrowserRouter([
    {
        path:'/',
        element: <GeneralRoutes />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <RouterLayout />,
                children:[
                    {
                        index: true,
                        element: <HomePage />
                    },
                    {
                        path: 'products/:ID',
                        element: <HomePage /> //CREAR
                    },
                    
                    {
                        path: 'user',
                        element: <CartPage />
                    }
                ]
            },
            
        ],
        
    },
    {
        path: '/auth',
        element: <AuthRoutes />,
        children:[
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'register',
                element: <RegisterPage />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminRoutes />,
        children: [
            {
                path: 'products',
                element: <ProductsPage />
            }
        ]
    },
])