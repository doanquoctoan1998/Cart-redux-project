import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
class ThumbnailItem extends React.Component {
    render() {
        var { products } = this.props
        return (
            <>
                {this.showThumbItem(products)}
            </>
        );
    }
    showThumbItem = (products) => {
        return(
            products.map((product, index) => {
                return (
                    <div key={index} className="col-md-2 mt-50">
                        <a >
                            <img src="product.image" alt="product.name" style={{ width: '100%' }} />
                            <label className="installment">Trả góp 0%</label>
                        </a>
                        <div className="price ml-10 mt-10 mb-10  "><strong>{product.price}</strong></div>
                        <div className="promo noimage">
                            <p> Mua kèm Office 365 Personal giảm 600.000đ và <b>1 K.mãi</b> khác</p>
                        </div>
                    </div>
                );
            })
        );
    }

}

export default ThumbnailItem;
