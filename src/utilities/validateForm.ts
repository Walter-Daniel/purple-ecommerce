import * as yup from 'yup';


export const loginValidate = yup.object().shape({
    username: yup.string().trim().required('El username es requerido'),
    password: yup.string().trim().required('El password es requerido')
})