import { Navigate, Route, Routes } from "react-router"
import { RouterLayout } from "../common/RouterLayout"
import { AdministrationPage, CartPage, HomePage, LoginPage, RegisterPage } from "../pages"
import { PrivateRoute } from "./Private.routes"


export const PublicRoutes = () => {
  return (
    

     <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path='/' element={<HomePage/>} /> 
                <Route path='/product/:ID' element={<HomePage/>} /> 
                <Route path='/*' element={ <Navigate to="/" /> } /> 
            </Route>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/register' element={<RegisterPage />} />
        </Routes>

  )
}