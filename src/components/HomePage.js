import React from 'react'
import Carousel from './Carousel'
import TrendingCarousel from './TrendingCarousel'
import Thumbnail_1 from './Thumbnail_1'
import Thumbnail_2 from './Thumbnail_2'
import Footer from './../components/Footer'
export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <Carousel />
                <div style={{ padding: '0px 0px 18px 0px' }}>
                    <a href="https://fptshop.com.vn/ctkm/apple" target="_blank"><img src="https://images.fpt.shop/unsafe/fit-in/1200x80/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/11/1/637082086775945131_H5.png" /></a>
                </div>
                <TrendingCarousel />
                <Thumbnail_1 />
                <Thumbnail_1 />
                <Thumbnail_2 />
                <Thumbnail_2 />
                <Footer />
            </>
        )
    }
}