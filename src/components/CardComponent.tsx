import { FC } from "react";
import { 
        Button, 
        Card, 
        CardActions, 
        CardContent, 
        CardMedia, 
        Divider, 
        Typography 
        } from "@mui/material";

type CardProps = {
    img: string;
    title: string;
    description: string;
    price: number;
}

export const CardComponent: FC<CardProps> = ({ img, title, description, price }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ mb:1.5 }}>
          {title}
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary" sx={{ mt:1.5 }}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt:1.5 }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" fullWidth>Learn more</Button>
      </CardActions>
    </Card>
  );
};
