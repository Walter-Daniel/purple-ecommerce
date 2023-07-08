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

type CardProps = {
    img: string;
    title: string;
    description: string;
    price: number;
}

import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Stack } from '@mui/material';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const CardComponent: FC<CardProps> = ({ img, title }) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const mouseOut = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, ":hover":{  boxShadow: "0px 10px 74px -30px #e0b1cb", transform: "scale3d(1.05, 1.05, 1)" }, transition:'transform 0.15s ease-in-out', position: 'relative'}}>
      <CardContent style={{position: 'absolute',
      bottom: '125px',
      left: '0',
      color: 'white',
      backgroundColor: '#000000c4',
      padding:'4px'}}>
      </CardContent>
      <CardActions style={{
        position: 'absolute',
        top: '10px',
        right: '1px',
        color: 'black',
        background: '#000000c4',
        borderRadius: '50%'
      }} >
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ padding:'2px', bgcolor: 'background.paper' }}>
            Añadir a favoritos
          </Box>
        </Popper>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onMouseEnter={handleClick} onMouseLeave={mouseOut}/>
      </CardActions>
      <CardMedia
        sx={{ height: 450,  }}
        image={img}
        title={title}
      />
      <CardActions>
        <Stack direction='column' width='100%' spacing={1}>
          <Button size="small" variant="outlined" fullWidth >Ver más</Button>
          <Button size="small" variant="contained" fullWidth >Comprar</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
