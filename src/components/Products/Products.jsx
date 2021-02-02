import { Container, Grid, Card, CardContent, CardActions, Typography, Button, CardHeader, CardMedia } from '@material-ui/core';
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { connect } from 'react-redux';
import buynow from '../../flux/actions/buynow'

const data = require('../../server/products/index.get.json');

class Products extends React.Component {
    processMenuList = () => {
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
        return <div style={{
            width: '100%',
            height: '100%',
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
        </div>
    }
    processItemGrid = () => {
        return (
            <Container style={{ height: "100%" }}>
                <Grid container style={{ height: "100%" }} spacing={1}>
                    <Grid item xs={3} style={{ height: '100%' }}>
                        {this.processMenuList()}
                    </Grid>
                    <Grid style={{ height: "100%" }} item xs={9}>
                        <div style={{ marginTop: '1%', height: '100%' }}>
                            {this.processProductLists()}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }

    processProductCard = (value) => {
        return (
            <Card key={value.id} style={{ height: '100%', boxShadow: 'none', borderBottom: 'dashed #e7e7ec', overflow: 'hidden' }}>
                <div style={{
                    padding: '2%',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    height: '10vh',
                }}>
                    {value.name}
                </div>
                <CardMedia
                    style={{ backgroundSize: 'contain', height: '20vh', padding: '1.5vh' }}
                    image={value.imageURL}
                    title={value.name}
                />
                <div style={{
                    backgroundColor: '#e7e7ec',
                    fontSize: '.9rem',
                    overflow: 'hidden',
                    height: '10vh',
                    lineHeight: '1.7'
                }}>
                    {value.description}
                </div >
                <CardActions style={{ boxSizing: "border-box" }}>
                    <Typography variant="subtitle2">
                        {`MRP Rs.${value.price}`}
                    </Typography>
                    <Button onClick={() => this.props.buynow(value)} style={{ textTransform: 'none', borderRadius: '0%' }} variant="contained" color="secondary">
                        Buy Now
                </Button>
                </CardActions>
            </Card >

        );
    }

    processProductLists = () => {
        return (
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3} >
                    {data.map(value => <Grid item xs={3} key={value.id}>
                        {this.processProductCard(value)}
                    </Grid>
                    )}
                </Grid>
            </Grid>

        );
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={12}>
                    {this.processItemGrid()}
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buynow: (value) => dispatch(buynow(value)),
    }
}

export default connect(null, mapDispatchToProps)(Products);