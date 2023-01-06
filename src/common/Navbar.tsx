import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC<{}> =()=>{

    const navigate=useNavigate();

    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between"alignItems="center">
                            <Grid item>
                                <Typography><a style={{textDecoration:'none',listStyleType:'none'}} href="/">Tienda</a></Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                <Button variant="outlined"onClick={()=>navigate('login')}>Login</Button>
                                <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>                        
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
