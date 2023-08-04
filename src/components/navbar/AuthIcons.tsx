import { Button, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FC } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/auth";



export const IsAuthenticatesButtons: FC<{}> = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const listProducts = useAppSelector((state) => state.cartReducer.length);
  const { rol } = useAppSelector((state) => state.authReducer);

  const handleLogout = () => {
    dispatch(logout('logout'))
    navigate("/auth/login")
  }

  return (
    <Stack direction="row" spacing={2}>
      <Box position="relative" sx={{ padding: "8px" }}>
      {
        rol === 'admin' ? 
        <IconButton onClick={() => navigate("/admin/products")}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
     
        :
        <IconButton onClick={() => navigate("/user/cart")}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
  
      }
        
        <span className="cart-number">{listProducts}</span>
      </Box>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </Stack>
  );
};

export const NonAuthenticatesButtons: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={() => navigate("/auth/login")}>
        Login
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate("/auth/register")}>
        Register
      </Button>
    </Stack>
  );
};
