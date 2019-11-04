import React from 'react';
import { connect } from 'react-redux'
import Carousel from './../components/Carousel'
import CarouselItem from './../components/CarouselItem'
import * as actions from './../actions/index'
class CarouselContainer extends React.Component {
    render() {
        var { products, carousel } = this.props
        return (
            <Carousel 
                index={carousel} 
                increase={this.controlImageNext} 
                reduction = {this.controlImagePre} 
                length={products.length} >
                {this.showProductImage(products)}
            </Carousel>
        );
    }
    showProductImage = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <CarouselItem
                    key={index}
                    product={product}
                    index={index}
                    incre={this.props.carousel}
                    length={products.length}
                />
            })
        }
        return result;
    }
    controlImageNext = () => {
        this.props.increaseIndex()
    }
    controlImagePre = () => {
        this.props.reductionIndex()
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        carousel: state.carousel,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        increaseIndex: () => {
            dispatch(actions.increaseIndex())
        },
        reductionIndex: () => {
            dispatch(actions.reductionIndex())
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarouselContainer);
