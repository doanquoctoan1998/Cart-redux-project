import React from 'react';
class CarouselItem extends React.Component {
    render() {
        var { product } = this.props
        return (
            <div className="item">
                <img src={product.image} alt = {product.name} />
            </div>
        );
    }

}
export default CarouselItem;
