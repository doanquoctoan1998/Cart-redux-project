import React from 'react';
import "./layout/margin.css"
class Thumbnail_1 extends React.Component {
    render() {
        return (
            <div>
                <h3 className = "mb-10">ĐIỆN THOẠI NỔI BẬT NHẤT</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/lights.jpg">
                                <img src="https://www.w3schools.com/w3images/nature.jpg" alt="Lights" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>Lorem ipsum...</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/nature.jpg">
                                <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Nature" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>Lorem ipsum...</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="thumbnail">
                            <a href="/w3images/fjords.jpg">
                                <img src="https://www.w3schools.com/w3images/fjords.jpg" alt="Fjords" style={{ width: '100%' }} />
                                <div className="caption">
                                    <p>Lorem ipsum...</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Thumbnail_1;
