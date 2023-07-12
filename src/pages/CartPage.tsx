import { Container } from "@mui/material";
import { FC } from "react";
import { HeaderComponent } from "../components";

export const CartPage : FC<{}> = () => {
    return(
        <Container>
            <HeaderComponent title='Carrito de Compras' description='Aquí podras ver cosas' />
        </Container>
    )
}