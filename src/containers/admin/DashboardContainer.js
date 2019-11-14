import React from 'react';
import { connect } from 'react-redux'
import Dashboard from '../../components/admin/Dashboard';
class DashboardContainer extends React.Component {
    render() {
        var { products } = this.props;
        console.log(products.length)
        return (
            <Dashboard lengthProducts={products.length}s̄
            >

            </Dashboard>
        );
    }

}
const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
