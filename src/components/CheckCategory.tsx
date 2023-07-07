import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { FC } from 'react';
import { TypeProducts } from '../types/products.interface';

type productProps = {
  menCategory : TypeProducts[] | undefined;
  womenCategory : TypeProducts[] | undefined;
}
export const Category: FC<productProps> = ({menCategory, womenCategory}) => {

  const handleChangeMan = (event: React.BaseSyntheticEvent<{}> , checked: boolean) => {
    if(checked ) {
      console.log({menCategory})
     }else{
      console.log('DESACTIVADAS PIBARDOSSS')
     }
   
  }


  const handleChangeWoman = (event: React.BaseSyntheticEvent<{}> , checked: boolean) => {

   let woman = event.target.name;
    
   if(checked ) {
    console.log(womenCategory)
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