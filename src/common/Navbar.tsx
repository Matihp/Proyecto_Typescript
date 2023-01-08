import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { CartComponent } from "./Cart";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Navbar: React.FC<{}> =()=>{

    const navigate=useNavigate();

    const [open, setOpen] = useState<boolean>(false);

    const [dark, setDark] = useState<boolean>(false);

    const items = useAppSelector((state) => state.cartReducer);

    const handleStateViewDrawer = () => {
        setOpen((state) => !state);
      };
    const handleTheme=()=>{
    }

    return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h4" >Rick's place</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  <IconButton color="primary" onClick={() => handleStateViewDrawer()}>
                    <Badge color="error" badgeContent={items.length}>
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <Button variant="contained" onClick={() => navigate('login')}>
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent open={open} handleStateViewDrawer={handleStateViewDrawer}/>
    </Box>
    );
}
