import React from 'react';
import { connect } from 'react-redux'
import TrendingCarousel from './../components/TrendingCarousel'
import * as actions from '../actions/index'
class TrendingCarouselContainer extends React.Component {
    render() {
        return (
            <TrendingCarousel
                increase={this.controlImageNext}
                reduction={this.controlImagePre}>
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
export default connect(null, mapDispatchToProps)(TrendingCarouselContainer);
