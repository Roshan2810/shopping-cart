import React from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Typography, CardContent, Container, TextField, Button, Grid } from '@material-ui/core'

const MuiCard = () => {
    return (
        <Container>
            <Grid style={{ marginTop: '5%' }} container spacing={7}>
                <Grid item xs={6}>
                    <Typography style={{ marginTop: '1%' }} variant="h4">
                        Login
                    </Typography>
                    <Typography style={{ marginTop: '5%' }} variant="h6">
                        Get access to your Orders, Wishlist and Recommendations
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <TextField style={{ width: '60%' }} label="Email" />
                    </div>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <TextField style={{ width: '60%', justifyContent: 'center' }} type="password" label="Password" />
                    </div>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <Button style={{ borderRadius: '0px', width: '60%' }} fullWidth variant="contained" color="secondary">Login</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
const Signin = () => {
    return (<div>
        <Header />
        {MuiCard()}
        <Footer />
    </div>)
}

export default Signin;