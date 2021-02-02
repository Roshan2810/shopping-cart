import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Link, Modal, Grid, Button, Paper } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'
import ControlPointIcon from '@material-ui/icons/ControlPoint';

class Header extends React.Component {
    state = {
        open: false
    }
    processSabkaBazaarLogo = () => {
        return (<img style={{ marginLeft: '15%', backgroundSize: 'contain' }}
            width="200vw"
            src="/static/images/logo_2x.png"
            alt="Sabka Bazaar" />);
    }

    processMenuOptions = () => {
        return (
            <>
                <div style={{ marginLeft: "7%", marginRight: '3%', marginTop: '2.5%' }}>
                    <Typography variant="h6" noWrap>
                        <Link onClick={() => this.props.history.push("/")} style={{ color: "#52525d" }}>Home</Link>
                    </Typography>
                </div>

                <div style={{ marginTop: '2.5%' }}>
                    <Typography variant="h6" noWrap>
                        <Link onClick={() => this.props.history.push("/products")} style={{ color: "#52525d" }}>Products</Link>
                    </Typography>
                </div>

            </>
        );
    }

    processOtherOptions = () => {
        return (
            <div style={{ marginLeft: '35%' }}>
                <Link onClick={() => this.props.history.push("/signin")} style={{ marginRight: '10%', color: '#52525d' }}>SignIn</Link>
                <Link onClick={() => this.props.history.push("/register")} style={{ color: '#52525d' }}>Register</Link>
                <div style={{ marginTop: '23%' }}>
                    <IconButton onClick={this.setModalState} aria-label="show 4 new mails" color="inherit" style={{ backgroundColor: '#e7e7ec', borderRadius: '0%' }}>
                        <ShoppingCartIcon style={{ fontSize: "38px" }} color="secondary" />
                        {/* <img src="/static/images/cart.svg" alt="cart" style={{ width: '2vw' }} /> */}
                        <span style={{ color: 'black', fontSize: '18px' }}>{`${this.props.productdetail.count} items`}</span>
                    </IconButton>
                </div>
            </div>
        );
    }

    handleClose = () => {
        this.setState({ open: false })
    }

    setModalState = () => {
        this.setState({ open: true })
    }


    processModal = () => {
        return (
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {
                    <div style={
                        {
                            width: '30%',
                            height: '80%',
                            backgroundColor: 'white',
                            outline: 0,
                            margin: 'auto',
                            marginTop: '6%',
                            marginLeft: '52.8%'
                        }
                    }>
                        {
                            this.props.productdetail.count ?
                                this.processCartView()
                                :
                                this.processEmptyCart()
                        }
                    </div>
                }
            </Modal>

        );
    }

    processCartView = () => {
        console.log(this.props.productdetail)
        let totalAmt = 0
        this.props.productdetail.details.forEach(data => totalAmt = totalAmt + data.totalPrice)
        return (
            <div style={{ backgroundColor: '#e7e7ec', height: '100%' }}>
                <div style={{ height: '7%' }}>
                    <Grid container style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
                        <Grid item xs={10}>
                            <Typography style={{ padding: '3%' }} variant="h6"><strong>{`My Cart(${this.props.productdetail.count} items)`}</strong></Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={this.handleClose} style={{ color: 'white', float: 'right' }}>
                                <CloseIcon fontSize="inherit" style={{ color: 'white' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ height: '78%', overflow: 'hidden', overflowY: 'auto' }}>
                    {
                        this.props.productdetail.details.map(data => {
                            return (
                                <Paper style={{ margin: '2% 0%', boxShadow: 'none' }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={3} style={{ padding: '2%' }}>
                                            <img style={{ width: '60%' }} src={data.imageURL} />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Typography><strong>{data.name}</strong></Typography>
                                            <Grid container style={{ margin: '1%' }}>
                                                <Grid item xs={0.5}>
                                                    <button style={{
                                                        borderRadius: '50%',
                                                        border: 'none',
                                                        backgroundColor: '#f50057',
                                                        color: 'white',
                                                        display: 'block',
                                                        height: '100%',
                                                        width: '100%'
                                                    }}>
                                                        -
                                                             </button>
                                                </Grid>
                                                <Grid item xs={1} style={{ textAlign: 'center' }}>
                                                    {data.count}
                                                </Grid>
                                                <Grid item xs={1}>
                                                    <button style={{
                                                        borderRadius: '50%',
                                                        border: 'none',
                                                        backgroundColor: '#f50057',
                                                        color: 'white',
                                                        display: 'block',
                                                        height: '100%',
                                                        width: '60%',
                                                    }}>
                                                        +
                                                            </button>
                                                </Grid>
                                                <Grid item xs={1}>
                                                    X
                                                </Grid>
                                                <Grid item xs={6}>
                                                    {`Rs.${data.price}`}
                                                </Grid>
                                                <Grid item xs={2}>
                                                    {`Rs.${data.totalPrice}`}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            );
                        })
                    }

                    <Paper style={{ margin: '2%', padding: '1%', boxSizing: 'border-box' }}>
                        <Grid container style={{ height: '100%' }}>
                            <Grid item xs={3}>
                                <img src="/static/images/lowest-price.png" />
                            </Grid>
                            <Grid item xs={9}>
                                <span style={{ marginLeft: '3vw', marginTop: '2vh' }}>You won't find it cheaper anywhere</span>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                <Paper style={{ height: '15%', padding: '1%' }}>
                    <div style={{ height: '20%', margin: '2%', fontWeight: 'bolder' }}>
                        <p style={{ textAlign: 'center' }}>Promo code can be applied on payment page</p>
                        <Button fullWidth
                            onClick={() => this.props.history.push("/")}
                            style={{ textTransform: 'none', fontWeight: 'bolder', padding: '3%', fontSize: '1.2rem', height: '5vh' }} variant="contained" color="secondary">
                            Proceed to checkout
                        <span style={{ color: 'white', marginLeft: 'auto', fontWeight: 'bolder' }}>
                                {`Rs. ${totalAmt}`}
                            </span>
                            <span style={{ color: 'white', fontSize: '1.5rem', marginLeft: '2%', marginTop: "-0.5%", fontWeight: '1000' }}>
                                {`>`}
                            </span>
                        </Button>
                    </div>
                </Paper>
            </div>

        )
    }

    processEmptyCart = () => {
        return (
            <>
                <div style={{ height: '39%' }}>
                    <Grid container style={{ backgroundColor: 'black', color: 'white' }}>
                        <Grid item xs={10}>
                            <Typography style={{ padding: '2%' }} variant="h6"><strong>My Cart</strong></Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={this.handleClose} style={{ color: 'white', float: 'right' }}>
                                <CloseIcon fontSize="inherit" style={{ color: 'white' }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ textAlign: 'center', height: '55%' }}>
                    <Typography variant="h6"><strong>No items in your cart</strong></Typography>
                    <div>
                        Your favourite items are just a click away
                    </div>
                </div>
                <div style={{ padding: '1%', height: '10%' }}>
                    <Button fullWidth
                        onClick={() => this.props.history.push("/")}
                        style={{ textTransform: 'none', borderRadius: '0%' }} variant="contained" color="secondary">Start Shopping</Button>
                </div>
            </>
        );
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar style={{ backgroundColor: 'white' }}>
                    {this.processSabkaBazaarLogo()}
                    {this.processMenuOptions()}
                    {this.processOtherOptions()}
                    {this.processModal()}
                </Toolbar>
            </AppBar>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        productdetail: state.productdetail
    }
}

export default withRouter(connect(mapStateToProps)(Header));