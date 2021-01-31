import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography, Link, Modal } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

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
                        <span style={{ color: 'black', fontSize: '18px' }}>{`${0} items`}</span>
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
                        height: '70%',
                        backgroundColor: 'white',
                        outline:0
                    }
                }>
                    Hello
                </div>
            }
        </Modal>

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

export default withRouter(Header);