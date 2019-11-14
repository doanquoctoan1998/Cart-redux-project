import React from 'react';
import './../layout/admin.css'
class Chart extends React.Component {
    render() {
        return (
            <div className="col-sm-9 mb">
                <h1>Luxury Phone</h1>

                <p>Apple</p>
                <div className="container">
                    <div className="skills html">60%</div>
                </div>

                <p>SamSung</p>
                <div className="container">
                    <div className="skills css">30%</div>
                </div>

                <p>Huwei</p>
                <div className="container">
                    <div className="skills js">8%</div>
                </div>

                <p>Orther</p>
                <div className="container">
                    <div className="skills php">2%</div>
                </div>
            </div>
        );
    }
}
export default Chart;
