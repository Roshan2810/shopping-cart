import { Container, Grid, Card, CardContent, CardActions, CardMedia, Typography, Button, CardHeader } from '@material-ui/core';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';


const data = [
    {
        id: 1,
        title: "Fresh Kiwi - Green, 3pcs",
        image: "https://lh3.googleusercontent.com/proxy/uJM3pvC_4_NmMqOUFl6Xn-VNv-P4Z32Bh0VY01qmCEbYADgmULIJGYK42hfyNlO1q8ugZjmCPiamSTln8OwLotR2seLZQf9PJ_lpWMY",
        description: "Kiwi is oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        price: "87",
    },
    {
        id: 2,
        title: "Apple - Washington, Regular, 4pcs",
        image: "https://images-na.ssl-images-amazon.com/images/I/81sXUXFQ2oL._SX466_.jpg",
        description: "The bright red coloured and heart shaped Washington apple are crunchy, juicy and slightly sweet. Washington Apples are a natural.",
        price: "187",
    },
    {
        id: 3,
        title: "Fesho Pomegrante Peeled, 500gm",
        image: "https://images-na.ssl-images-amazon.com/images/I/81sXUXFQ2oL._SX466_.jpg",
        description: "Pomegrante variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white.",
        price: "88",
    },
    {
        id: 4,
        title: "Capsicum green - 1 kg",
        image: "https://5.imimg.com/data5/PB/NY/GLADMIN-23937840/fresho-pomegranate-peeled-500x500.png",
        description: "Leaving a moderately pungent taste on the tongue. Green capsicums, also known as green peppers are bell shaped.",
        price: "137",
    }
]

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
        height: "100%",
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
        <Container>
            <Grid container style={{ height: window.innerHeight }} spacing={1}>
                <Grid item xs={3}>
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
        <Card key={value.id} style={{ borderBottom: "dashed ", boxShadow: 'none', borderRadius: '0%' }}>
            <CardHeader
                title={value.title}
            />
            <CardMedia
                style={{
                    height: 0,
                    paddingTop: '56.25%',
                }}
                image='/src/logo512.png'
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {value.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography variant="subtitle2">
                    {`MRP Rs.${value.price}`}
                </Typography>
                <Button style={{ textTransform: 'none' }} variant="contained" color="secondary">
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
        <>
            <Header />
            {processItemGrid()}
            <Footer />
        </>
    )
}
export default Products;