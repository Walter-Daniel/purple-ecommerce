import React, { FC } from "react";
import { 
  Box,
        Button, 
        Card, 
        CardActions, 
        CardContent, 
        CardMedia, 
        Checkbox, 
        Popper
        } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Stack } from '@mui/material';
import { addToCart, useAppDispatch, useAppSelector } from "../redux";
import { setItems } from "../utilities/localStorage";
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type CardProps = {
    id: string | number;
    img: string;
    title: string;
    description: string;
    price: number;
    newID: number;
}

export const CardComponent: FC<CardProps> = ({ id, img, title, price}) => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.authReducer)
  const item = useAppSelector((state) => state.cartReducer)
  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      title,
      price,
      img,
      newID: Date.now().toString(36) + Math.random().toString(36).substr(2)
    }))
    setItems('cart', item)
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const mouseOut = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl);
  const idPopper = open ? 'simple-popper' : undefined;

  return (
    <Card sx={{ 
      maxWidth: 230, 
      minWidth: 230,
      ":hover":{  boxShadow: "0px 10px 74px -30px #b1a7a6" }, 
      cursor: 'pointer',
      transition:'transform 0.15s ease-in-out', 
      position: 'relative',
      border: '1px solid #dad7cd'}}>
      <CardContent style={{position: 'absolute',
      bottom: '125px',
      left: '0',
      color: 'white',
      backgroundColor: 'black',
      padding:'4px'}}>
      </CardContent>
      <CardActions style={{
        position: 'absolute',
        top: '10px',
        right: '1px',
        color: 'white',
        background: 'black',
        borderRadius: '50%'
      }} >
        <Popper id={idPopper} open={open} anchorEl={anchorEl}>
          <Box sx={{ padding:'2px', bgcolor: 'background.paper' }}>
            Añadir a favoritos
          </Box>
        </Popper>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onMouseEnter={handleClick} onMouseLeave={mouseOut}/>
      </CardActions>
      <CardMedia
        sx={{ height: 280 }}
        image={img}
        title={title}
      />
      <CardActions>
        <Stack direction='column' width='100%' spacing={1}>
          {
            (status === 'authenticated') ?
                    <>
                    <Button size="small" variant="outlined" fullWidth >Ver más</Button>
                    <Button size="small" variant="contained" fullWidth onClick={handleAddToCart} >Comprar</Button>
                    </>
                  :
                    <Button size="small" variant="outlined" fullWidth >Ver más</Button>
          }
        </Stack>
      </CardActions>
    </Card>
  );
};
