import React from 'react';
import { connect } from 'react-redux'
import TrendingCarouselItem from '../components/TrendingCarouselItem'
class TrendingCarouselItemContainer extends React.Component {
    render() {
        var { products ,trendingcarousel} = this.props
        return (
            <TrendingCarouselItem
                products={products}
                trendingcarousel ={trendingcarousel}
            >
            </TrendingCarouselItem>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.trendingproducts,
        trendingcarousel : state.trendingcarousel,
    }
}
export default connect(mapStateToProps, null)(TrendingCarouselItemContainer);
