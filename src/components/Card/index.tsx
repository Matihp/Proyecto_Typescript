import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
type CardProps={
    id:number;
    image:string;
    name:string;
    species:string;
    status:string;
  }
export const CardComponent: React.FC<CardProps> = ({id,image,name,species,status}) => {

  let navigate = useNavigate();
  return (
    <Card>
        <CardMedia component="img"
        height="194"
        image={image}
        alt="Paella dish"/>
        <CardContent>
            <Typography sx={{mt:1.5}} variant='h4'>{name}</Typography>
            <Divider/>
            <Typography sx={{mt:1.5}}>Species:{species}</Typography>
            <Typography sx={{mt:1.5}}>Status:{status}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>navigate(`/character/${id}`)} variant='contained'size='small'>Learn More</Button>
        </CardActions>
    </Card>
  )
}
