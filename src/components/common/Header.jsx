import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Link, Modal, Grid, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'

class Header extends React.Component {
    state = {
        open: false
    }
    processSabkaBazaarLogo = () => {
        return (<img style={{ marginLeft: '15%' }}
            width="10%"
            src="https://iconape.com/wp-content/files/yy/354003/svg/354003.svg"
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
                        <ShoppingCartIcon style={{ fontSize: "40px" }} color="secondary" />
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
        return (<Modal
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
                    {this.processModalView()}
                </div>
            }
        </Modal>

        );
    }

    processModalView = () => {
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