import React from 'react'
import { Route, Routes } from 'react-router'
import { AdministrationPage } from '../pages'
import { AdminLayout } from '../common/AdminLayout';

export const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/admin' element={ <AdminLayout /> } >
        </Route>
    </Routes>
  )
}
