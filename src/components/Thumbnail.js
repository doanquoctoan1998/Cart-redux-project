import React from 'react';
import "./layout/margin.css"
import "./layout/Thumbnail.css"
import './ThumbnailItem'
import ThumbnailItem from './ThumbnailItem';
class Thumbnail extends React.Component {
    render() {
        return (
            <div >
                <h3 className="mb-10">ĐIỆN THOẠI NỔI BẬT NHẤT</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature">
                            <a>
                                <img src="https://stcv4.hnammobile.com//uploads/products/colors/7/apple-iphone-11-pro-max-2-sim-256gb-01568625785.jpg" alt="Lights" style={{ width: '100%' }} />
                            </a>
                            <h3>Oppo Reno</h3>

                        </div>
                        <div className="caption">
                            <div className="price">
                                <strong>8.990.000₫</strong>
                            </div>
                        </div>
                    </div>
                    <ThumbnailItem/>
                    <ThumbnailItem/>
                    <ThumbnailItem/>
                    <ThumbnailItem/>
                </div>
            </div>
        );
    }

}

export default Thumbnail;
