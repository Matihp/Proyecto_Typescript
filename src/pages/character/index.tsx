import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { characters } from '../../api/characters'
import { ICharacter } from '../Home/interface/character.interface'

export const CharacterPage : React.FC = () => {
    const {id}=useParams()

    const [loading,setLoading]=useState<boolean>(true)

    const [character,setCharacter]=useState<ICharacter | null>(null)

    useEffect(()=>{
        characters.getById({id})
        .then((res)=>{
            setCharacter(res.data)
            setLoading(false)
        })
        .catch(e=>console.error(e))
    },[])

  return (
    
    <Box sx={{ width: "100%" }}>
    <Container maxWidth="xl">
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid sx={{mt:2}} container columnSpacing={2}>
          <Grid item xs={6}>
              <Typography variant='h1' >{character!.name}</Typography>
              <Divider/>
              <Typography variant="h6">{character!.origin.name}</Typography>
              <Box sx={{mt: 2}}>
              <Chip color="primary" variant="outlined" label={character!.status} />
              </Box>
          </Grid>
          <Grid item xs={6}>
            <img src={character!.image} style={{width:"100%", borderRadius:"0.5em"}} />
          </Grid>
        </Grid>
      )}
    </Container>
  </Box>
        
    )
}

