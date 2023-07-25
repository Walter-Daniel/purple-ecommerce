import { FC, useState } from "react";
import { Box, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, Stack, Typography } from "@mui/material";
import { CardComponent } from "../components";
import { useContextProducts } from "../context/ProductsProvider";


export const CheckCategory: FC<{}> = () => {
  const { error, menCategory,womenCategory, loading } = useContextProducts();  
  const [menChecked, setMenChecked] = useState<string>('man');
  const [womenChecked, setWomenChecked] = useState<string>('woman');



  const handleChangeMan = (
    event: React.BaseSyntheticEvent<{}>,
    checked: boolean
  ) => {
    if (checked) {
      setMenChecked(event.target.name);
    } else {
      setMenChecked("unChecked");
    }
  };
  const handleChangeWoman = (
    event: React.BaseSyntheticEvent<{}>,
    checked: boolean
  ) => {
    if (checked) {
      setWomenChecked(event.target.name);
    } else {
      setWomenChecked("unChecked");
    }
  };
  return (
    <>
      <Box sx={{ backgroundColor: '#240046', padding: '0.5rem 0', mt: 1}}>
        <Stack direction='row' justifyContent='center' marginTop='1rem'>
          <FormGroup id="formGroup" sx={{ display: 'flex', flexDirection:'row', alignItems:'center' }}>
          <Typography paddingRight='1rem'>Categorías: </Typography>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Mujeres"
              onChange={handleChangeWoman}
              name="woman"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Hombres"
              onChange={handleChangeMan}
              name="man"
            />
          </FormGroup>
        </Stack>
      </Box>
      <Grid container sx={{ mt: 1, width: "100%" }} justifyContent="center">
        {error && (
          <Grid item textAlign="center">
            <Typography variant="h3">
              Se ha producido un error al cargar los productos
            </Typography>
          </Grid>
        )}
        {loading && (
          <Grid container justifyContent="center" direction="row">
            <Grid item xs={1}>
              <CircularProgress color="secondary" />
            </Grid>
          </Grid>
        )}
        {(menChecked === 'man') && menCategory?.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4} 
            lg={3}
            key={product.id}
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardComponent
              id= {product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.image}
              newID={product.id}
            />
          </Grid>
        ))}
        {(womenChecked === 'woman') && womenCategory?.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4} 
            lg={3}
            key={product.id}
            sx={{
              mt: 4,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardComponent
              id= {product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              img={product.image}
              newID={product.id}
            />
          </Grid>
        ))}
        {
          (menChecked === 'unChecked' && womenChecked === 'unChecked') &&
          <Typography variant="h5">No se seleccionó ninguna categoría</Typography>
        }
      </Grid>
    </>
  );
};
