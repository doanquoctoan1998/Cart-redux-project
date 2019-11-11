import React from 'react';
import { connect } from 'react-redux'
import Thumbnail from './../components/Thumbnail'
import * as actions from '../actions/index'
class ThumbnailContainer extends React.Component {
    render() {
        var { trendingphone, trendinglaptop } = this.props
        trendingphone = trendingphone.slice(0,5)
        trendinglaptop = trendinglaptop.slice(0,5)
        var thumb = [];
        var phone = {
            label :  'ĐIỆN THOẠI NỔI BẬT NHẤT',
            product: trendingphone
        }
        var laptop = {
            label :  'MÁY TÍNH NỔI BẬT NHẤT',
            product: trendinglaptop
        }
        thumb.push(phone);
        thumb.push(laptop);
        return (
            <Thumbnail thumb = {thumb}></Thumbnail>
        );
    }
}
const  mapStateToProps = (state, ownProps) => {
    return {
        trendingphone: state.trendingphone,
        trendinglaptop: state.trendinglaptop,
    }
}

export default connect(mapStateToProps, null)(ThumbnailContainer);
