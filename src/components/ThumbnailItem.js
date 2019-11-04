import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
class ThumbnailItem extends React.Component {
    render() {
        return (
            <div className="col-md-2 mt-50">
                <a >
                    <img src="https://cdn.tgdd.vn/Products/Images/42/200330/oppo-a5s-red-400x400.jpg" alt="" style={{ width: '100%' }} />
                    <label className="installment">Trả góp 0%</label>
                </a>
                <div className="price ml-10 mt-10 mb-10  "><strong>5.690.000₫</strong></div>
                <div className="promo noimage">
                    <p> Mua kèm Office 365 Personal giảm 600.000đ và <b>1 K.mãi</b> khác</p>
                </div>
            </div>
        );
    }

}

export default ThumbnailItem;
