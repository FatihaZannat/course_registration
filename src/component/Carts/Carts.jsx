import Cart from "../cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({cartStates, creditHour, price}) => {
// // const {price} = cartStates[0]
// console.log(cartStates[0].price);
    return (
        <div className="md:w-1/4 bg-white">
            <h1>Credit Hour Remaining : {20 - creditHour}</h1>
        {
            cartStates.map((cartState, i )=> <Cart i={i} key={cartState.price}  cartState={cartState}></Cart>)
        }
         <hr />
            <h3>Total credit hour: {creditHour}</h3>
            <hr />
            <h3>Total price: {price} usd</h3>
    </div>
    );
};
Carts.propTypes = {
    cartStates: PropTypes.object,
    creditHour: PropTypes.number,
    price: PropTypes.number
}

export default Carts;