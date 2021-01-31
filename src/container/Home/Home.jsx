import React from 'react';
import Header from '../../components/common/Header'
import Carousel from './Carousel'
import Footer from '../../components/common/Footer'

const data = require('./carddata.json')
class Home extends React.Component {
    processCards = () => {
        const length = data.length - 1
        return data.map((val, index) => {
            return <Carousel
                key={val.cardContentH5}
                cardContentH5={val.cardContentH5}
                cardContentSubtitle={val.cardContentSubtitle}
                image={val.image}
                mediaPosition={val.mediaPosition}
                buttonText={val.buttonText}
                lastCard={length === index ? true : false} />
        })
    }


    render() {
        return (
            <div>
                <Header />
                {this.processCards()}
                <Footer />
            </div >

        );
    }
}

export default Home;