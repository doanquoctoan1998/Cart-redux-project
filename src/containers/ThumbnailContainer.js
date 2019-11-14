import React from 'react';
import { connect } from 'react-redux'
import Thumbnail from './../components/Thumbnail'
import * as actions from '../actions/index'
class ThumbnailContainer extends React.Component {
    render() {
        var { trendingphone, trendinglaptop } = this.props
        trendingphone = trendingphone.slice(0, 5)
        trendinglaptop = trendinglaptop.slice(0, 5)
        return (
            <>
                <Thumbnail label='ĐIỆN THOẠI NỔI BẬT NHẤT' trending={trendingphone} ></Thumbnail>
                <Thumbnail label='MÁY TÍNH NỔI BẬT NHẤT' trending={trendinglaptop} ></Thumbnail>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        trendingphone: state.trendingphone,
        trendinglaptop: state.trendinglaptop,
    }
}

export default connect(mapStateToProps, null)(ThumbnailContainer);
