import { FC } from "react";
import { 
        Button, 
        Card, 
        CardActions, 
        // CardContent, 
        CardMedia, 
        } from "@mui/material";
import { Stack } from '@mui/material';
import { addToCart, useAppDispatch, useAppSelector } from "../redux";
import { setItems } from "../utilities/localStorage";

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

  return (
    <Card sx={{ 
      minWidth: 250,
      transition:'transform 0.15s ease-in-out', 
      position: 'relative',
      border: '1px solid #dad7cd'}}>
      {/* <CardContent style={{
        backgroundColor: 'white'
      }}>
      </CardContent> */}
      
      <CardMedia
        sx={{ height: 280, padding:'2rem' }}
        image={img}
        title={title}
        
      />
      <CardActions style={{ backgroundColor: '#f8f8f8' }} >
        <Stack direction='column' width='100%' spacing={1}>
          {
            (status === 'authenticated') ?
                    <>
                    <Button  variant="contained" fullWidth color="primary">Ver más</Button>
                    <Button  variant="outlined" fullWidth onClick={handleAddToCart} color="primary">Comprar</Button>
                    </>
                  :
                    <Button  variant="contained" fullWidth color="primary">Ver más</Button>
          }
        </Stack>
      </CardActions>
    </Card>
  );
};
