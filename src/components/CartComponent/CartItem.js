import React from 'react';
import * as Message from './../../constants/Message'
class CartItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }
    render() {
        var { item } = this.props;
        var { quantity } = item.quantity > 0 ? item : this.state;
        console.log(quantity);
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td><h4>{item.product.price}$</h4></td>
                <td className="center-on-small-only">
                    <span className="qty"> <h4>{quantity}</h4></span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={ () => this.onUpdateQuantity(item.product, item.quantity - 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label
                            onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td> <h4>{this.showSubTotal(item.product.price, item.quantity)}$</h4></td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={() => this.onDelete(item.product)}
                    >
                        X
                </button>
                </td>
            </tr>
        );
    }
    onDelete = (product) => {
        // console.log(product);
        var { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            var { onUpdateProductInCart, onChangeMessage } = this.props;
            this.setState({
                quantity: quantity
            });
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }
}
export default CartItem;
