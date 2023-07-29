import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AdministrationPage, CartPage, HomePage, LoginPage, RegisterPage } from '../pages';
import { RouterLayout } from '../common/RouterLayout';
import { PrivateRoute } from './Private.routes';

export const AppRouter: React.FC<{}> = () => {    
    return(
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
        <Routes>
            <Route path='/' element={} />
            <Route path='/user' element={} />
        </Routes>
    )
}