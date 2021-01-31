import { Container, Grid, Card, CardContent, CardActions, CardMedia, Typography, Button, CardHeader, Paper } from '@material-ui/core';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';


const data = require('./products.json');

const processMenuList = () => {
    const listStyle = {
        marginLeft: '5%'
    }
    const hrStyle = {
        height: '2px',
        width: '100%',
        color: 'blue',
        float: 'left',
        marginLeft: '2%'

    }
    return <Grid item xs={12} style={{
        width: '100%',
        height: window.innerHeight + window.outerHeight,
        backgroundColor: '#e7e7ec',
        top: '0'
    }}>
        <ul style={{ listStyle: 'none', padding: "2vh 0vh", margin: '0%', overflow: 'hidden', color: 'gray' }}>
            <li style={listStyle}>
                Fruits & Vegetables
            </li>
            <hr style={hrStyle}></hr>
            <li style={listStyle}>
                Bakery Cakes and Dairy
            </li>
            <hr style={hrStyle}></hr>

            <li style={listStyle}>
                Beverages
            </li>
            <hr style={hrStyle}></hr>

            <li style={listStyle}>
                Beauty and Hygiene
            </li>
            <hr style={hrStyle}></hr>

            <li style={listStyle}>
                Baby Care
            </li>
            <hr style={hrStyle}></hr>
        </ul>
    </Grid>
}
const processItemGrid = () => {
    return (
        <Container style={{ height: "100%" }}>
            <Grid container style={{ height: "100%" }} spacing={1}>
                <Grid item xs={3} style={{ height: '100%' }}>
                    {processMenuList()}
                </Grid>
                <Grid item xs={9}>
                    <div style={{ marginTop: '1%' }}>
                        {processProductLists()}
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

const processProductCard = (value) => {
    return (
        <Card key={value.id} style={{ borderBottom: "dashed #e7e7ec", boxShadow: 'none', borderRadius: '0%' }}>
            <CardHeader
                title={value.title}
            />
            <img width="90%" src={value.image} alt={value.description} />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {value.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="subtitle2">
                    {`MRP Rs.${value.price}`}
                </Typography>
                <Button style={{ textTransform: 'none', borderRadius:'0%' }} variant="contained" color="secondary">
                    Buy Now
                </Button>
            </CardActions>
        </Card>
    );
}

const processProductLists = () => {
    return (
        <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
                {data.map(value => <Grid item xs={3} key={value.id}>
                    {processProductCard(value)}
                </Grid>
                )}
            </Grid>
        </Grid>
    );
}
const Products = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={12}>
                {processItemGrid()}
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}
export default Products;