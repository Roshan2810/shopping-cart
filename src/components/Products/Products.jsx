import { Container, Grid, Card, CardContent, CardActions, CardMedia, Typography, Button, CardHeader, Paper } from '@material-ui/core';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';


const data = [
    {
        id: 1,
        title: "Fresh Kiwi - Green, 3pcs",
        image: "https://sukanfood.com/wp-content/uploads/2019/07/Kiwi-300x300.jpg",
        description: "Kiwi is oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
        price: "87",
    },
    {
        id: 2,
        title: "Apple - Regular, 4pcs",
        image: "https://www.bigbasket.com/media/uploads/p/m/40033819-2_6-fresho-apple-shimla.jpg",
        description: "The bright red coloured and heart shaped Washington apple are crunchy, juicy and slightly sweet.",
        price: "187",
    },
    {
        id: 3,
        title: "Pomegrante Peeled, 500gm",
        image: "https://www.bigbasket.com/media/uploads/p/m/40005823_7-fresho-pomegranate-peeled.jpg",
        description: "Pomegrante variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments .",
        price: "88",
    },
    {
        id: 4,
        title: "Capsicum green - 1 kg",
        image: "https://publiccanteen.com/wp-content/uploads/2020/04/green-capsicum-organic-vegetable-500x500-1-1.jpg",
        description: "Leaving a moderately pungent taste on the tongue. Green capsicums, also known as green peppers are bell shaped.",
        price: "137",
    },
    {
        id: 5,
        title: "Tomato - Local, 500gm",
        image: "https://www.opagrologica.it/wp-content/uploads/2018/01/tondoliscio-300x300.jpg",
        description: "Fresho bring to you an exquisite range of locally grown organic tomatoes, which are available at bigbasket. These tomatoes",
        price: "12",
    },
    {
        id: 6,
        title: "White - Bread, 400gm",
        image: "https://www.bigbasket.com/media/uploads/p/m/40087525_2-fresho-sandwich-bread-safe-preservative-free.jpg",
        description: "Freshly Baked bread is one of lifes greatest simple pleasure at Bigbasket we decided to give you just that.",
        price: "32",
    },
    {
        id: 7,
        title: "Amul Paneer - 250gm",
        image: "https://www.bigbasket.com/media/uploads/p/m/40096747_5-amul-fresh-paneer.jpg",
        description: "Freshly Baked bread is one of lifes greatest simple pleasure at Bigbasket we decided to give you just that.",
        price: "98",
    },
    {
        id: 8,
        title: "Epigamia Greek Yoghurt- 90gm",
        image: "https://www.bigbasket.com/media/uploads/p/m/40075139_3-epigamia-greek-yogurt-blueberry.jpg",
        description: "Epigamia means in Ancient Greek meant a way to Formalize the relationship between different nations. Epigma greek yoghurt",
        price: "40",
    },
    {
        id: 9,
        title: "Epigamia Greek Yoghurt- 90gm",
        image: "https://www.bigbasket.com/media/uploads/p/m/1201999_2-epigamia-greek-yogurt-strawberry.jpg",
        description: "Leaving a moderately pungent taste on the tongue. Green capsicums, also known as green peppers are bell shaped.",
        price: "40",
    },
    {
        id: 10,
        title: "Tata Tea Gold Leaf, 500gm",
        image: "https://m.media-amazon.com/images/S/aplus-media/sota/19f2a663-5992-4c43-bede-6b6965657906._CR0,0,300,300_PT0_SX300__.jpg",
        description: "Fresho bring to you an exquisite range of locally grown organic tomatoes, which are available at bigbasket. These tomatoes",
        price: "165",
    },
    {
        id: 11,
        title: "Red Label Tea - 500gm",
        image: "https://www.hpsss.in/wp-content/uploads/2020/10/15-300x300.jpg",
        description: "Freshly Baked bread is one of lifes greatest simple pleasure at Bigbasket we decided to give you just that.",
        price: "205",
    },
    {
        id: 12,
        title: "Bournvita- 750gm",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxTRyEwH4cndTWD3Pm1-U3jVdoTO3pyOwjA&usqp=CAU",
        description: "Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin(D,B2,B9,B12). It combines",
        price: "572",
    },
    {
        id: 13,
        title: "Listerine - 250ml",
        image: "https://www.bigbasket.com/media/uploads/p/m/1208096_4-listerine-mouthwash-cool-mint.jpg",
        description: "Listerine Cool mint Antibacterial Mouthwash rapid & easy to use, a 30 second 'slosh' with Listerine after",
        price: "109",
    },
    {
        id: 14,
        title: "Johnson & Johnson",
        image: "https://images-eu.ssl-images-amazon.com/images/I/31CDDcTVReL._SX300_SY300_QL70_ML2_.jpg",
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