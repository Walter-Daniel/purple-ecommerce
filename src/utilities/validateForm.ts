import * as yup from 'yup';

const namePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const loginValidate = yup.object().shape({
    email: yup.string()
              .trim()
              .required('El correo es requerido')
              .email('El email no es válido')
              .matches(email, 'El email no es válido'),
    password: yup.string().trim().required('La contraseña es requerida').min(4, "El mínimo debe ser 4 carácteres").max(9, "El máximo debe ser de 9 carácteres")
});

export const registerValidate = yup.object().shape({            
    displayName: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .matches(namePattern, 'Este campo solo puede contener letras y espacios')
                  .min(5, 'El campo debe tener un min. de 5 caracteres')
                  .max(30, 'El campo debe tener un max. de 30 caracteres'),               
    email: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .email('El email no es válido')
                  .matches(email, 'El email no es válido')
                  .max(30, 'El email debe tener un max. de 30 carácteres'),               
    password: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .min(6, 'La contraseña debe tener un min. 6 caracteres')
                  .max(12, 'La contraseña debe tener un max. de 12 caracteres')
                  .matches(passwordPattern, 'La contraseña debe contener por lo menos una letra mayúscula, una minúscula, un número y un caracter especial.'),
    password2: yup.string()
                  .required('Campo requerido')
                  .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  }).required();

export const productsValidate = yup.object().shape({            
    title: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .matches(namePattern, 'Este campo solo puede contener letras y espacios')
                  .min(5, 'El campo debe tener un min. de 5 caracteres')
                  .max(30, 'El campo debe tener un max. de 30 caracteres'),               
    description: yup.string()
                  .trim()
                  .required('Campo requerido')
                  .min(5, 'El campo debe tener un min. de 5 caracteres')
                  .max(50, 'El email debe tener un max. de 50 carácteres'),               
    price: yup.number()
                  .required('Campo requerido')
                  .positive('El número debe ser positívo')
                  .min(1000, 'El monto mínimo es de 1000 ')
                  .max(100000, 'El monto máximo es de 100000'),
    category: yup.string()
                  .required('Campo requerido')
                  .min(5, 'El campo debe tener un min. 5 caracteres')
                  .max(15, 'El campo debe tener un max. de 15 caracteres'),
    status: yup.boolean()
                 .required('Campo requerido'),
    sizeSelected: yup.array().of(yup.boolean().oneOf([true], 'You must check this box')),
                  
    photoURL: yup.string()
                .required('Campo requerido')
                .min(5, 'El campo debe tener un min. 5 caracteres')
                .max(30, 'El campo debe tener un max. de 15 caracteres'),

  }).required();

  export const sizeValidation = yup.object().shape({
                            sx: yup.boolean(),
                            s: yup.boolean(),
                            m: yup.boolean(),
                            l: yup.boolean(),
                            xl: yup.boolean()
                        })
                        .test(
                            "size",
                            "At least one of the checkbox is required",
                            (options) => {
                            console.log(
                                options.sx || options.s || options.m || options.l || options.xl,
                                "yup multiCheckbox result"
                            );
                            return options.sx || options.s || options.m || options. l|| options.xl;
                            })