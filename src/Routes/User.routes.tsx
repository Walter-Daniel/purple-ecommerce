import { Navigate, Route, Routes } from "react-router"
import { RouterLayout } from "../common/RouterLayout"
import { AdministrationPage, CartPage, HomePage, LoginPage, RegisterPage } from "../pages"
import { PrivateRoute } from "./Private.routes"


export const UserRoutes = () => {
  return (
    

         <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path='/' element={<HomePage/>} /> 
                <Route path='/*' element={ <Navigate to="/" /> } /> 
            </Route>
            <Route path='/auth/login' element={<LoginPage/>} />
            <Route path='/auth/register' element={<RegisterPage />} />
        </Routes>

  )
}
