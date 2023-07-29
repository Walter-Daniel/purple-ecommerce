import { Route, Routes } from "react-router"
import { CartPage, HomePage } from "../pages"

export const UserRoutes = () => {
  return (
    
         <Routes>
                <Route path='/' element={<HomePage/>} /> 
                <Route path='/cart' element={<CartPage />} /> 
         </Routes>

  )
}
