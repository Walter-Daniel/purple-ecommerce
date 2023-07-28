import { Button, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FC } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router";
import { logout, useAppDispatch, useAppSelector } from "../../redux";



export const IsAuthenticatesButtons: FC<{}> = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const listProducts = useAppSelector((state) => state.cartReducer.length);

  const handleLogout = () => {
    dispatch(logout('logout'))
    navigate("/login")
  }

  return (
    <Stack direction="row" spacing={2}>
      <Box position="relative" sx={{ padding: "8px" }}>
        <IconButton onClick={() => navigate("/user/cart")}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <span className="cart-number">{listProducts}</span>
      </Box>
      <Button variant="contained" onClick={() => handleLogout()}>
        Logout
      </Button>
    </Stack>
  );
};

export const NonAuthenticatesButtons: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button variant="contained" color="secondary" onClick={() => navigate("/register")}>
        Register
      </Button>
    </Stack>
  );
};
