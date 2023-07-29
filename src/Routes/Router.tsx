
import { createBrowserRouter } from 'react-router-dom';

import { AdminRoutes, AuthRoutes } from './Conditions.routes';
import { RouterLayout } from '../common/RouterLayout';
import { HomePage, LoginPage, ProductsPage, RegisterPage } from '../pages';


// export const AppRouter: React.FC<{}> = () => {    
//     const { status } = useAppSelector((state) => state.authReducer)

//     return(
        // <Routes>
        //     <Route path='/' element={<RouterLayout/>}>
        //         <Route path='/' element={<HomePage/>} /> 
        //         <Route path='/*' element={ <Navigate to="/" /> } /> 
        //         <Route path='/user' element={<PrivateRoute />} >
        //             <Route path='/user/cart' element={<CartPage />} />
        //             <Route path="/user/*" element={ <Navigate to="/login" /> } />
        //         </Route>
        //     </Route>
        //     <Route path='/login' element={<LoginPage/>} />
        //     <Route path='/register' element={<RegisterPage />} />
        //     <Route path='/admin' element={ < AdministrationPage /> } />
        // </Routes>
        // <Routes>
        //     <Route path='/' element={<RouterLayout />}>
        //         <Route path='/' element={<HomePage />} /> 
        //         <Route path='/product/:ID' element={<HomePage/>} /> 
        //         <Route path='/*' element={ <Navigate to="/" /> } /> 
        //     </Route>
        //     <Route path='/auth' element={<AuthRoutes />}>
        //         <Route path='/auth/login' element={<LoginPage />} />
        //         <Route path='/auth/register' element={<RegisterPage />} />
        //         <Route path='/auth/*' element={ <Navigate to="/" /> } /> 
        //     </Route>
        // </Routes>
//     )
// }

export const router= createBrowserRouter([
    {
        path:'/',
        element: <RouterLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/products/:ID',
                element: <HomePage /> //CREAR
            },
            {
                path: 'auth',
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
                path: 'admin',
                element: <AdminRoutes />,
                children: [
                    {
                        path: 'products',
                        element: <ProductsPage />
                    }
                ]
            }
        ]
    }
])