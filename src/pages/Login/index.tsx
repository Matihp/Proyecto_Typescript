import React from "react";
import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";


export const LoginPage: React.FC<{}>=()=>{
  type LoginType={
    username:string;
    password:string;
  }
  const [loginData,setLoginData]=React.useState<LoginType>({
    username:"",
    password:"",
  })
  const dataLogin=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({...loginData, [e.target.name]:e.target.value})
  }
  const handleSubmit=(e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    console.log(loginData)
  }
    return(
    <Container maxWidth="sm">
      <Grid container direction="column" justifyContent='center' alignItems='center' sx={{minHeight:"100vh"}}>
        <Grid item>
            <Paper sx={{padding:"1.2em",borderRadius:"0.5em"}}>
                <Typography variant="h4"sx={{mt:"1vh",mb:"1vh"}}>Iniciar sesion</Typography>
                <Box component='form' onSubmit={handleSubmit}>
                    <TextField name='username' type='text' fullWidth label="Email" sx={{mt:"2vh",mb:"1.5vh"}}margin='normal' required onChange={dataLogin}/>
                    <TextField name='password' type='password' fullWidth label= "Password" sx={{mt:"1.5vh",mb:"1.5vh"}}margin='normal' required onChange={dataLogin}/>
                    <Button fullWidth type="submit"sx={{mt:"1.5vh",mb:"3vh"}} variant='contained'>Iniciar sesion</Button>
                </Box>
            </Paper>
        </Grid>
      </Grid>
    </Container>  
    );
    
}