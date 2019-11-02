import React from 'react';
import { connect } from 'react-redux'
import Carousel from './../components/Carousel'
import CarouselItem from './../components/CarouselItem'
class CarouselContainer extends React.Component {
    render() {
        var { products } = this.props
        return (
            <Carousel>
                {this.showProductImage(products)}
            </Carousel>
        );
    }
    showProductImage = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                console.log(product)
                return <CarouselItem key={index} product={product} />
            })
        }
        return result;
    }
}
const mapStateToProps = (state) => {
    return {
        carousel: state.carousel,
        products: state.products
    }
}
export default connect(mapStateToProps, null)(CarouselContainer);
