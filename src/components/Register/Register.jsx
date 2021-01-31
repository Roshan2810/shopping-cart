import React from 'react';
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Typography, Container, TextField, Button, Grid } from '@material-ui/core'

const MuiCard = () => {
    return (
        <Container>
            <Grid style={{ marginTop: '5%' }} container spacing={7}>
                <Grid item xs={6}>
                    <Typography style={{ marginTop: '1%' }} variant="h4">
                        Signup
                    </Typography>
                    <Typography style={{ marginTop: '5%' }} variant="h6">
                        We do not share your personal details with any one
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <TextField style={{ width: '60%' }} label="First Name" />
                    </div>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <TextField style={{ width: '60%' }} label="Last Name" />
                    </div>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <TextField style={{ width: '60%' }} label="Email" />
                    </div>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <TextField style={{ width: '60%', justifyContent: 'center' }} type="password" label="Password" />
                    </div>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <TextField style={{ width: '60%', justifyContent: 'center' }} type="password" label="Confirm Password" />
                    </div>
                    <div style={{ marginBottom: '5%', width: '100%' }}>
                        <Button style={{ borderRadius: '0px', width: '60%', textTransform: 'none' }} fullWidth variant="contained" color="secondary">Signup</Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
const Register = () => {
    return (<div>
        <Header />
        {MuiCard()}
        <Footer />
    </div>)
}

export default Register;