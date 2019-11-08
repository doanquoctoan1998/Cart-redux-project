import React from 'react'
import CarouselContainer from './../containers/CarouselContainer'
import ImageBar from './ImageBar'
import TrendingCarouselContainer from './../containers/TrendingCarouselContainer'
import Thumbnail from './Thumbnail'
import Footer from './../components/Footer'
export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <CarouselContainer />
                <ImageBar/>
                <TrendingCarouselContainer />
                <Thumbnail />
                <Footer />
            </>
        )
    }
}