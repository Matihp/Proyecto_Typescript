import React from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type LoginType={
  username:string;
  password:string;
}

export const LoginPage: React.FC<{}>=()=>{

  const { getSuccess } = useNotification();

  const formik = useFormik<LoginType>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values));
    },
  });

  return(
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent='center' alignItems='center' sx={{minHeight:"100vh"}}>
        <Grid item>
            <Paper sx={{padding:"1.2em",borderRadius:"0.5em"}}>
                <Typography variant="h4"sx={{mt:"1vh",mb:"1vh"}}>Iniciar sesion</Typography>
                <Box component='form' onSubmit={formik.handleSubmit}>
                    <TextField name='username' type='text' fullWidth label="Email" sx={{mt:"2vh",mb:"1.5vh"}}margin='normal' value={formik.values.username}
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}/>
                    <TextField name='password' type='password' fullWidth label= "Password" sx={{mt:"1.5vh",mb:"1.5vh"}}margin='normal' value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}/>
                    <Button fullWidth type="submit"sx={{mt:"1.5vh",mb:"3vh"}} variant='contained'>Iniciar sesion</Button>
                </Box>
            </Paper>
        </Grid>
      </Grid>
    </Container>  
  ); 
};