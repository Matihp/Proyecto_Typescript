import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/cart.slice';
type CardProps={
    id:number;
    image:string;
    name:string;
    species:string;
    status:string;
  }
export const CardComponent: React.FC<CardProps> = ({id,image,name,species,status}) => {

  let navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [disabled,setDisabled]=useState<boolean>(false);

  const itemExist= useAppSelector((state)=>state.cartReducer)

  useEffect(()=>{
    //   ? setDisabled(true) : setDisabled(false)
    setDisabled(itemExist.some((item)=>item.id===id))
  },[itemExist,id])

  const handleAddToCart = ()=>{
    dispatch(addToCart({
      id,
      name,
      image,
      info: status,
    }))
  }

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
            <Button fullWidth onClick={()=>navigate(`/character/${id}`)} variant='contained'size='small'>Learn More</Button>
            <Button fullWidth disabled={disabled} onClick={handleAddToCart} variant="outlined" size="small" >Add to cart</Button>
        </CardActions>
    </Card>
  )
}
