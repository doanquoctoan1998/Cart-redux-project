import React from 'react';
import { connect } from 'react-redux'
import TrendingCarousel from './../components/TrendingCarousel'
import * as actions from '../actions/index'
class TrendingCarouselContainer extends React.Component {
    render() {
        var { products, trendingcarousel } = this.props
        products = products.slice(0,products.length-(products.length%4))
        return (
            <TrendingCarousel
                increase={this.controlImageNext}
                reduction={this.controlImagePre}
                length={products.length}
                index={trendingcarousel}>
            </TrendingCarousel>
        );
    }
    controlImageNext = () => {
        this.props.increaseTrendingIndex()
    }
    controlImagePre = () => {
        this.props.reductionTrendingIndex()
    }
}
const  mapStateToProps = (state, ownProps) => {
    return {
        products: state.trendingproducts,
        trendingcarousel: state.trendingcarousel,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseTrendingIndex: () => {
            dispatch(actions.increaseTrendingIndex())
        },
        reductionTrendingIndex: () => {
            dispatch(actions.reductionTrendingIndex())
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrendingCarouselContainer);
