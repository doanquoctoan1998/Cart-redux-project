import React from 'react';
import Footer from './../components/Footer';
import ProductsContainer from './../containers/ProductsContainer';
// import Message from './CartComponent/Message';
import CartContainer from '../containers/CartContainer';
import MessageContainer from '../containers/MessageContainer';
class CartPage extends React.Component {
    render() {
        return (
            <div>
        <main id="mainContainer">
            <div className="container">
                {/* <!-- Products --> */}
                <ProductsContainer/>
                {/* <!-- Message --> */}
                <MessageContainer/>
                {/* <!-- Cart --> */}
                <CartContainer/>
            </div>
        </main>
        {/* <!-- Footer --> */}
        <Footer />
    </div>
        );
    }
}
export default CartPage;
