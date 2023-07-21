import * as yup from 'yup';

const namePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginValidate = yup.object().shape({
    username: yup.string().trim().required('El username es requerido'),
    password: yup.string().trim().required('El password es requerido').min(4, "El mínimo debe ser 4 carácteres").max(9, "El máximo debe ser de 9 carácteres")
});

export const registerValidate = yup.object().shape({
    firstName: yup.string()
                  .required('Campo requerido')
                  .matches(namePattern, 'Este campo solo puede contener letras y espacios')
                  .min(2, 'El nombre debe tener un min. de 2 caracteres')
                  .max(15, 'El nombre debe tener un max. de 20 caracteres'),            
    lastName: yup.string()
                  .required('Campo requerido')
                  .matches(namePattern, 'Este campo solo puede contener letras y espacios')
                  .min(2, 'El apellido debe tener un min. de 2 caracteres')
                  .max(15, 'El apellido debe tener un max. de 20 caracteres'),               
    email: yup.string()
                  .required('Campo requerido')
                  .max(30, 'El email debe tener un max. de 30 carácteres')               
                  .email('El email no es válido'),
    password: yup.string()
                  .required('Campo requerido')
                  .min(6, 'La contraseña debe tener un min. 6 caracteres')
                  .max(12, 'La contraseña debe tener un max. de 12 caracteres')
                  .matches(passwordPattern, 'La contraseña debe contener por lo menos una letra mayúscula, una minúscula, un número y un caracter especial.'),
    password2: yup.string()
                  .required('Campo requerido')
                  .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  }).required();