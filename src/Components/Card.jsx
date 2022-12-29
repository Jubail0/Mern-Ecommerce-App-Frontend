import React from 'react'
import {
    Card,
    CardContent,
    Button,
    Typography,
    CardMedia
} from "@mui/material"
import {NavLink} from 'react-router-dom'
import {addToCart} from '../API/addToCart.js'
import {useDispatch} from 'react-redux'
import FormatPrice from './FormatPrice.js'

function SingleCard({
    img,
    btn1,
    btn,
    name,
    price,
    id,
    category,
    width,
    height,
    radius,
    swiper
}) {
    const dispatch = useDispatch()
    return (<div>
        <Card sx={
             swiper?{ maxWidth: `${width}px` ,height:`${height}%`  ,borderRadius:radius ,border:'none',boxShadow: "2px 4px 12px rgb(0 0 0 / 8%)"}:   { width: `${width}px` ,height:`${height}%`  ,borderRadius:radius ,border:'none',boxShadow: "2px 4px 12px rgb(0 0 0 / 8%)"}}
            align="center">
        
            <CardMedia component='img'  height={240}  
                image={img}
                alt="new Arrivals"
                sx={{objectFit:"cover","&:hover":{transform:"scale(1.12)"},transition:'all ease 0.8s'}}
                />
            <CardContent >
                <Typography variant='body2' color='text.secondary'> {name} </Typography>
                {
                price && <Typography p={1}
                    variant='body2'
                    color='text.secondary'>
                    Price: {
                    < FormatPrice price = {
                        price
                    } />
                } </Typography>
            }
                <NavLink to={
                    `/${category}/product/${id}`
                }>
                    <Button sx={
                        {mt: 3}
                    }> {btn}</Button>
                </NavLink>
                {
                btn1 && <Button sx = {{ mt: 3 }}
                onClick = {
                    () => addToCart(id, dispatch)
                } > {
                    btn1
                } </Button>
            } </CardContent>


        </Card>
    </div>)
}

export default SingleCard
