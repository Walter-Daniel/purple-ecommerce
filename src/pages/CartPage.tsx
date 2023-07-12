import { Avatar, Button, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { FC } from "react";
import { HeaderComponent } from "../components";
import { removeToCart, useAppDispatch, useAppSelector } from "../redux";

export const CartPage : FC<{}> = () => {

    const items = useAppSelector((state) => state.cartReducer);
    const dispatch = useAppDispatch();

    return(
        <Container>
            <HeaderComponent title='Carrito de Compras' description='Aquí podras ver cosas' />
            <Grid container>
                <Grid item>
                    {
                        items.length !== 0 ?
                            <ul>
                                {
                                    items.map(({id, img, title, description}) => (
                                        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
                                            <ListItem alignItems="flex-start" key={id}>
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" src={img} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={title}
                                                secondary={
                                                <>
                                                    <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                    >
                                                    Ali Connors
                                                    </Typography>
                                                    {description}
                                                </>
                                                }
                                            />
                                            <Button onClick={() =>dispatch(removeToCart(id))}>Borrar</Button>
                                            </ListItem>
                                            <Divider variant="inset" component="li" />                                       
                                        </List>
                                    ))
                                }
                            </ul> : 
                            <Typography>No hay ningún producto en su lista de compras.</Typography>
                    }
                    
                </Grid>
            </Grid>
        </Container>
    )
}