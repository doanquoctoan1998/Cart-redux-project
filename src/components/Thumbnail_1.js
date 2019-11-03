import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
class Thumbnail_1 extends React.Component {
    render() {
        return (
            <div>
                <h3 className="mb-10">ĐIỆN THOẠI NỔI BẬT NHẤT</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature">
                            <a href="/w3images/lights.jpg">
                                <img src="https://stcv4.hnammobile.com//uploads/products/colors/7/apple-iphone-11-pro-max-2-sim-256gb-01568625785.jpg" alt="Lights" style={{ width: '100%' }} />
                            </a>
                            <h3>Oppo Reno</h3>
                        </div>
                        <div className="caption">
                            <div class="price"><strong>8.990.000₫</strong></div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="">
                            <a href="/w3images/nature.jpg">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/200330/oppo-a5s-red-400x400.jpg" alt="Nature" style={{ width: '100%' }} />
                            </a>
                            <div class="price ml-10 mt-10 mb-10  "><strong>5.690.000₫</strong></div>
                            <div class="promo noimage">
                                <p> Mua kèm Office 365 Personal giảm 600.000đ và <b>1 K.mãi</b> khác</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="">
                            <a href="/w3images/nature.jpg">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/200330/oppo-a5s-red-400x400.jpg" alt="Nature" style={{ width: '100%' }} />
                            </a>
                            <div class="price ml-10 mt-10 mb-10  "><strong>5.690.000₫</strong></div>
                            <div class="promo noimage">
                                <p> Mua kèm Office 365 Personal giảm 600.000đ và <b>1 K.mãi</b> khác</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="">
                            <a href="/w3images/nature.jpg">
                                <img src="https://cdn.tgdd.vn/Products/Images/42/200330/oppo-a5s-red-400x400.jpg" alt="Nature" style={{ width: '100%' }} />
                            </a>
                            <div class="price ml-10 mt-10 mb-10  "><strong>5.690.000₫</strong></div>
                            <div class="promo noimage">
                                <p> Mua kèm Office 365 Personal giảm 600.000đ và <b>1 K.mãi</b> khác</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Thumbnail_1;
