import React from 'react';
class CarouselItem extends React.Component {
    render() {
        var { product , index ,incre ,length} = this.props
        console.log(length)
        var active = '';
        if(index === incre){
            active = 'active'
        }
        if(index=== length) active = 'active'
        return (
            <div className = {`item ${active}`}>
                <img src={product.image} alt = {product.name} />
            </div>
        );
    }

}
export default CarouselItem;
