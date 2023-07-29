import { Avatar, Button, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { FC } from "react";
import { HeaderComponent } from "../components";
import { setItems } from "../utilities/localStorage";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { removeToCart } from "../redux/slices";


export const CartPage : FC<{}> = () => {
    
    const items = useAppSelector((state) => state.cartReducer);
    const dispatch = useAppDispatch()
    const handleDelete = (newID:any) => {
        const filtered = items.filter(item => item.newID !== newID);   
        setItems('cart', filtered)
        dispatch(removeToCart({newID}))
    }

    return(
        <Container>
            <HeaderComponent title='Carrito de Compras' description='Aquí podras ver cosas' />
            <Grid container>
                <Grid item sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', minHeight:'50vh', mt: 2, padding:'2rem'}}>
                    {
                        items.length !== 0 ?
                            <ul>
                                {
                                    items.map(({img, title, newID, price}) => (
                                        <List  key={newID}>
                                            <ListItem alignItems="flex-start">
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
                                                    ${price}
                                                    </Typography>
                                                </>
                                                }
                                            />
                                            <Button variant="contained" onClick={() => handleDelete(newID)}>Borrar</Button>
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