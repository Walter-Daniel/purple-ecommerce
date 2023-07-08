import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { FC, useState } from 'react';


export const Category: FC<{}> = () => {

  const [menChecked, setMenChecked] = useState<string | null>(null)
  const [womenChecked, setWomenChecked] = useState<string | null>(null)

  const handleChangeMan = (event: React.BaseSyntheticEvent<{}> , checked: boolean) => {
    if( checked ) {
      setMenChecked(event.target.name)
     }else{
      setMenChecked('unChecked')
     }
  }

  //hacer el mismo procedimiento con las mujeres. Traer lo de homepage y hacer ternario

 
  const handleChangeWoman = (event: React.BaseSyntheticEvent<{}> , checked: boolean) => {

    if( checked ) {
      setWomenChecked(event.target.name)
     }else{
      setWomenChecked('unChecked')
     }
  }
  console.log({menChecked})
  console.log({womenChecked})
  return (
    <FormGroup id='formGroup'>
      <FormControlLabel control={<Checkbox defaultChecked/>} label="Mujeres"  onChange={handleChangeWoman} name='woman'  />
      <FormControlLabel control={<Checkbox defaultChecked/>} label="Hombres"  onChange={handleChangeMan} name='man'/>
    </FormGroup>
  )
}