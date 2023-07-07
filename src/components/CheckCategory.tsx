import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { FC } from 'react';
import { TypeProducts } from '../types/products.interface';

type productProps = {
  products: TypeProducts[] | undefined
}

export const Category: FC<productProps> = (products) => {

  const handleChangeMan = (event: React.BaseSyntheticEvent<{}> , checked: boolean) => {

   let man = event.target.name;
    
   if(checked ) {
    console.log('FUNCAAAAAAAAAAAA PA LOS PIBERIOS' )
   }else{
    console.log('DESACTIVADOS PIBEEESSS')
   }
  }
  const handleChangeWoman = (event: React.BaseSyntheticEvent<{}> , checked: boolean) => {

   let woman = event.target.name;
    
   if(checked ) {
    console.log('FUNCAAAAAAAAAAAA PA LAS WACHITAS')
   }else{
    console.log('DESACTIVADAS WACHASSSS')
   }
  }
  return (
    <FormGroup id='formGroup'>
      <FormControlLabel control={<Checkbox defaultChecked/>} label="Mujeres"  onChange={handleChangeWoman} name='woman'  />
      <FormControlLabel control={<Checkbox defaultChecked/>} label="Hombres"  onChange={handleChangeMan} name='man'/>
    </FormGroup>
  )
}