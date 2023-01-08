import * as yup from 'yup';

export const LoginValidate=yup.object().shape({
    username: yup.string().trim().required('El email es requerido.').max(70,'El maximo es de 70 caracteres.') ,
    password: yup.string().trim().required('El password es requerido.').min(6,'El mínimo es de 6 caracteres.').max(25,'El maximo es de 25 caracteres.'),
})