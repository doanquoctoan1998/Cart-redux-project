import React from 'react'
import Carousel from './Carousel'
import TrendingCarousel from './TrendingCarousel'
import Thumbnail_1 from './Thumbnail_1'
import Thumbnail_2 from './Thumbnail_2'
export default class Home extends React.Component
{
    render()
    {
        return(
            <>
            <Carousel />
            <TrendingCarousel />
            <Thumbnail_1 />
            <Thumbnail_1 />
            <Thumbnail_2 />
            <Thumbnail_2 />
            </>
        )
    }
}