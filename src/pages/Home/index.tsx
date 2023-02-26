import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Container, Grid, Pagination } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { ICharacter } from "./interface/character.interface";
export const HomePage: React.FC<{}>=()=>{

  const [allCharacters,setAllCharacters]=React.useState<ICharacter[] | null>(null);

  const [loading,setLoading]=useState<boolean>(true);

  const [page,setPage]=useState(1);

  const [count,setCount]=useState(10);

  useEffect(()=>{
    setLoading(true)
    characters.getAll({page}).then((res)=>{
      setCount(res.data.info.pages)
      setAllCharacters(res.data.results)
      setTimeout(()=> setLoading(false),1000)
    }).catch((e)=>{
      console.error(e)
    })
  },[page])

  const handleChange=(event: React.ChangeEvent<unknown>,value:number)=>{
    setPage(value)
  }
  
    return(
    <Container maxWidth="xl">
      <HeaderComponent title="Hola"description="Bienvenidos"element={<Button variant="contained">Comprar</Button>}/>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
       ) : (
        <>
          <>
            {allCharacters?.length!==0 ? (
              <Grid container spacing={2} >
              {allCharacters?.map((character)=>(
                <Grid item xs={3} key={character.id} >
                  <CardComponent id={character.id} image={character.image} name={character.name}species={character.species}status={character.status} />
                </Grid> 
              ))}
              </Grid>
            ) : ('')}
          </>
          <Box sx={{width:'100%',display:'flex',justifyContent:'center'}}>
           <Pagination count={count} page={page} onChange={handleChange} variant="outlined" color="secondary"size="large" sx={{mb:3,mt:2}}/> 
          </Box>
        </>
       )
      }
    </Container>  
    );  
}
