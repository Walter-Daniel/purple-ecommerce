import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartPage, HomePage, LoginPage, RegisterPage } from '../pages';
import { RouterLayout } from '../common/RouterLayout';

export const AppRouter: React.FC<{}> = () => {
    return(
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/' element={<HomePage/>} />           
                <Route path='/cart' element={<CartPage />} />           
            </Route>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage />} /> 
        </Routes>
    )
}