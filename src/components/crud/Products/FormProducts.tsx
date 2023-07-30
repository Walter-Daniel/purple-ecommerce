import { TextField, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useFormik } from 'formik';
import { productsValidate } from '../../../utilities/validateForm';

export type ProductsProps = {
    title: string
    description: string
    price: number
    category: string
    size: string[]
    status: boolean
    photoURL: string
}

export const FormProducts = () => {
    const formik = useFormik<ProductsProps>({
        initialValues: {
            title: '',
            description: '',
            price: 0,
            category: '',
            size: [],
            status: false,
            photoURL:''
        },
        validationSchema: productsValidate,
        onSubmit: (values: ProductsProps, {resetForm}) => {
          console.log(values)
        }
      });
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
                  <TextField 
                    id='size'
                    name='size'
                    label='Estado' 
                    margin='normal'
                    type='checkbox'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.size}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.size && Boolean(formik.errors.size)}
                    helperText={formik.touched.size && formik.errors.size}
                    />
                  <TextField 
                    id='status'
                    name='status'
                    label='Estado' 
                    margin='normal'
                    type='radio'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.status}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.status && Boolean(formik.errors.status)}
                    helperText={formik.touched.status && formik.errors.status}
                    />
                  <TextField 
                    id='category'
                    name='category'
                    label='Categoría' 
                    margin='normal'
                    type='radio'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.category && Boolean(formik.errors.category)}
                    helperText={formik.touched.category && formik.errors.category}
                    />
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
                    >Registrate</Button>
                </Box>
  )
}
