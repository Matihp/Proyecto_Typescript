import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";

export const Navbar: React.FC<{}> =()=>{
    return(
        <Box sx={{flexGrow:1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between"alignItems="center">
                            <Grid item>
                                <Typography>Tienda</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                <Button variant="outlined">Login</Button>
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
