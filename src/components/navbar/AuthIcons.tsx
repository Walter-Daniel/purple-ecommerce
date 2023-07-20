import { Button, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { FC } from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux";



export const IsAuthenticatesIcons: FC<{}> = () => {
  const navigate = useNavigate();
  const listProducts = useAppSelector((state) => state.cartReducer.length);
  return (
    <Stack direction="row" spacing={2}>
      <Box sx={{ padding: "8px" }}>
        <IconButton onClick={() => navigate("/user/cart")}>
          <VolunteerActivismIcon />
        </IconButton>
        <span></span>
      </Box>
      <Box position="relative" sx={{ padding: "8px" }}>
        <IconButton onClick={() => navigate("/user")}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <span className="cart-number">{listProducts}</span>
      </Box>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Logout
      </Button>
    </Stack>
  );
};

export const NonAuthenticatesIcons: FC<{}> = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="row" spacing={2}>
      <Box position="relative" sx={{ padding: "8px" }}>
        <IconButton onClick={() => navigate("/wishes")}>
          <VolunteerActivismIcon />
        </IconButton>
        <span className="cart-number">0</span>
      </Box>
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
      <Button variant="outlined" sx={{ color: "#ffffff" }}>
        Register
      </Button>
    </Stack>
  );
};
