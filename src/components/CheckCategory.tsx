import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { FC } from 'react';
import { TypeProducts } from '../types/products.interface';

type productProps = {
  products: TypeProducts[] | undefined
}

export const Category: FC<productProps> = (products) => {
  const handleChange = (event: React.BaseSyntheticEvent<{}> , checked: boolean) => {

   if(checked){
    console.log(event.target.value)
    return event.target.value
   }
  }

//   let productFilter = []
// if()
//   const womanFilter = products?.filter(item => (
//     item.category === "women's clothing"
//   ))
    
  return (
    <FormGroup id='formGroup'>
      <FormControlLabel control={<Checkbox />} label="Mujeres" id='mujeres' onChange={handleChange} name='woman' value='woman'/>
      <FormControlLabel control={<Checkbox />} label="Hombres" id='hombres' onChange={handleChange} name='man' value='man'/>
    </FormGroup>
  )
}