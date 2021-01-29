import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Link, Paper } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Carousel from './Carousel'

const data = [
    {
        cardContentH5: "Fruits and Vegetables",
        cardContentSubtitle: "A variety of fresh fruits and vegetables.",
        image: "https://img.freepik.com/free-photo/collection-fruits-vegetables-isolated_135427-230.jpg?size=626&ext=jpg",
        mediaPosition: "left",
        buttonText: "Explore fruit-and-veg"
    },
    {
        cardContentH5: "Bakery Cakes and Dairy",
        cardContentSubtitle: "The best cup cakes, cookies, pies, cheesecakes, fresh bread and more.",
        image: "https://www.seekpng.com/png/full/27-276206_bread-png.png",
        mediaPosition: "right",
        buttonText: "Explore bakery-cakes-dairy"
    },
    {
        cardContentH5: "Beverages",
        cardContentSubtitle: "Our beverages department will ensure your fridge is always fully stocked.",
        image: "https://i4.progressivedigitalmedia.com/3/2020-08-26-11-06-trussbeverageportfolio_cropped_90.jpg",
        mediaPosition: "left",
        buttonText: "Explore beverages"
    },
    {
        cardContentH5: "Beauty and Hygiene",
        cardContentSubtitle: "Buy beauty and personal care products.",
        image: "https://d1dlh1v05qf6d3.cloudfront.net/information/uploads/2018/03/Nivea-products.png",
        mediaPosition: "right",
        buttonText: "Explore beauty-hygiene"
    },
    {
        cardContentH5: "Baby Care",
        cardContentSubtitle: "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
        image: "https://www.babycouture.in/blog/wp-content/uploads/2016/02/baby-care-tips-9.jpg",
        mediaPosition: "left",
        buttonText: "Explore baby-care"
    }
]
class Home extends React.Component {

    processSabkaBazaarLogo = () => {
        return (<img style={{ marginLeft:'15%' }}
            width="10%"
            src="https://iconape.com/wp-content/files/yy/354003/svg/354003.svg"
            alt="Sabka Bazaar" />);
    }

    processMenuOptions = () => {
        return (
            <>
                <div style={{ marginLeft: "7%", marginRight: '3%', marginTop: '2.5%' }}>
                    <Typography variant="h6" noWrap>
                        <Link style={{ color: "#52525d" }}>Home</Link>
                    </Typography>
                </div>

                <div style={{ marginTop: '2.5%' }}>
                    <Typography variant="h6" noWrap>
                        <Link style={{ color: "#52525d" }}>Products</Link>
                    </Typography>
                </div>

            </>
        );
    }

    processOtherOptions = () => {
        return (
            <div style={{ marginLeft: '35%' }}>
                <Link style={{ marginRight: '10%', color: '#52525d' }}>SignIn</Link>
                <Link style={{ color: '#52525d' }}>Register</Link>
                <div style={{ marginTop: '23%' }}>
                    <IconButton aria-label="show 4 new mails" color="inherit" style={{ backgroundColor: '#e7e7ec', borderRadius: '0%' }}>
                        <ShoppingCartIcon style={{ fontSize: "40px" }} color="secondary" />
                        <span style={{ color: 'black', fontSize: '18px' }}>{`${0} items`}</span>
                    </IconButton>
                </div>
            </div>
        );
    }

    processCards = () => {
        return data.map(val => {
            return <Carousel
                key={val.cardContentH5}
                cardContentH5={val.cardContentH5}
                cardContentSubtitle={val.cardContentSubtitle}
                image={val.image}
                mediaPosition={val.mediaPosition}
                buttonText={val.buttonText} />
        })
    }

    render() {
        return (
            <>
                <div>
                    <AppBar position="static">
                        <Toolbar style={{ backgroundColor: 'white' }}>
                            {this.processSabkaBazaarLogo()}
                            {this.processMenuOptions()}
                            {this.processOtherOptions()}
                        </Toolbar>
                    </AppBar>
                    <div>{this.processCards()}</div>
                </div >
                <Paper style={{ backgroundColor: '#e7e7ec' }}>
                    <Typography
                        style={{ marginLeft: '16%' }}
                        variant="h6">
                        Copyright (c) 2020-2021 Sabka Bazaar Grocery Supplies Pvt Ltd
                        </Typography>
                </Paper>
            </>
        );
    }
}

export default Home;