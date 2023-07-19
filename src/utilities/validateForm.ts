import * as yup from 'yup';


export const loginValidate = yup.object().shape({
    username: yup.string().trim().required('El username es requerido'),
    password: yup.string().trim().required('El password es requerido').min(4, "El mínimo debe ser 4 carácteres").max(9, "El máximo debe ser de 9 carácteres")
})