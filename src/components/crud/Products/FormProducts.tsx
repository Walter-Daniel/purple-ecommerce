import { TextField, Button, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Box, FormControl, FormLabel, FormHelperText } from '@mui/material'
import { useFormik } from 'formik';
import { productsValidate } from '../../../utilities/validateForm';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';

export type ProductsProps = {
    title: string
    description: string
    price: number
    category: 'camperas' | 'buzos' | 'pantalones' | 'polleras' | 'camisas' | 'remeras'
    size: string[]
    status: boolean
    photoURL: string
}

export const FormProducts = () => {

    const [sizeArray, setSizeArray] = useState<string[]>([])
    const formik = useFormik<ProductsProps>({
        initialValues: {
            title: '',
            description: '',
            price: 0,
            category: 'camperas',  
            size: [],
            status: false,
            photoURL:''
        },
        validationSchema: productsValidate,
        onSubmit: (values: ProductsProps) => {
          values.size = sizeArray
          console.log(values);
          
        }
      });
      const handleSizeChange:ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const index = sizeArray.indexOf(event.target.value)
        if(index === -1 ){
          setSizeArray([...sizeArray, event.target.value])
        }else {
          setSizeArray(sizeArray.filter(size => size !== event.target.value))
        }
      }
      const sizes = ['xs', 's', 'm', 'l', 'xl']
      
  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
                  <TextField 
                    id='title'
                    name= 'title'
                    label='Título' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    />
                  <TextField 
                    id='description'
                    name= 'description'
                    label='Descripción' 
                    margin='normal'
                    type='text'
                    multiline
                    maxRows={4}
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    />
                  <TextField 
                    id='price'
                    name='price'
                    label='Precio' 
                    margin='normal'
                    type='number'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                    />
                   <FormControl>
                    <FormLabel>Elegir tamaños disponibles:</FormLabel>
                    <FormGroup row>
                    {
                        sizes.map(size => (
                          
                          <FormControlLabel 
                          control={<Checkbox checked={sizeArray.includes(size)} value={size} />} 
                          onChange={handleSizeChange} 
                          label={size}
                          id={size}
                          key={size}
                          name={size}             
                          />
                        ))
                    }
                    <FormHelperText style={{ color: "red" }}>
                        {formik.touched.size && formik.errors.size
                          ? formik.touched.size && formik.errors.size
                          : " "}
                      </FormHelperText>
                    </FormGroup>
                   </FormControl>    
                   <FormControl>
                      <FormLabel>Selecciona una categoría: </FormLabel>
                        <RadioGroup
                        onChange={formik.handleChange}
                        name="status"
                        value={formik.values.category}
                        id='status'
                        row
                        >
                          <FormControlLabel
                            value="camperas"
                            control={<Radio  checked/>}
                            label="Camperas"
                          />
                          <FormControlLabel
                            value="buzos"
                            control={<Radio />}
                            label="Buzos"
                          />
                          <FormControlLabel
                            value="pantalones"
                            control={<Radio />}
                            label="Pantalones"
                          />
                          <FormControlLabel
                            value="polleras"
                            control={<Radio />}
                            label="Polleras"
                          />
                          <FormControlLabel
                            value="remeras"
                            control={<Radio />}
                            label="Remeras"
                          />
                          <FormControlLabel
                            value="camisas"
                            control={<Radio />}
                            label="Camisas"
                          />
                      </RadioGroup>
                  </FormControl>        
                   <FormControl>
                      <FormLabel>Estado del producto: </FormLabel>
                        <RadioGroup
                        onChange={formik.handleChange}
                        name="status"
                        value={formik.values.status}
                        id='status'
                        row
                        >
                          <FormControlLabel
                            value="true"
                            control={<Radio />}
                            label="Habilitado"
                          />
                          <FormControlLabel
                            value="false"
                            control={<Radio />}
                            label="Deshabilitado"
                          />
                      </RadioGroup>
                  </FormControl>        
                  <TextField 
                    id='photoURL'
                    name='photoURL'
                    label='URL imagen' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.photoURL}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.photoURL && Boolean(formik.errors.photoURL)}
                    helperText={formik.touched.photoURL && formik.errors.photoURL}
                    />
                 
                  <Button 
                    fullWidth 
                    type='submit'
                    variant='contained'
                    sx={{ mt:1.5, mb:3 }}
                    >Registrar Producto</Button>
                </Box>
  )
}
