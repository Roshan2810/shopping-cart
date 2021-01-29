import React from 'react';
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


const Carousel = ({ cardContentH5, cardContentSubtitle, image, mediaPosition, buttonText }) => {
    return (
        <Container style={{ marginTop: '1%' }}>
            <Card style={{ display: 'flex', marginBottom: '1%', boxShadow: "0px 5px 0px 0px #e7e7ec" }}>
                {mediaPosition === "left" ?
                    (<>
                        <CardMedia style={{ marginRight: '5%' }}>
                            <img style={{ width: '70%' }} src={image} />
                        </CardMedia>
                        <CardContent style={{ marginTop: '5%', paddingLeft: '2%' }}>
                            <Typography component="h5" variant="h5">
                                {cardContentH5}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {cardContentSubtitle}
                            </Typography>
                            <Button variant="contained" color="secondary">
                                {buttonText}
                            </Button>
                        </CardContent>
                    </>)
                    :
                    (<>
                        <CardContent style={{ marginTop: '5%', paddingLeft: '2%', marginRight: '5%' }}>
                            <Typography component="h5" variant="h5">
                                {cardContentH5}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {cardContentSubtitle}
                            </Typography>
                            <Button variant="contained" color="secondary">
                                {buttonText}
                            </Button>
                        </CardContent>
                        <CardMedia>
                            <img style={{ width: '70%' }} src={image} />
                        </CardMedia>
                    </>)
                }
            </Card>
        </Container>
    );
}

export default Carousel;