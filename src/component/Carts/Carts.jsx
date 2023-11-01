import Cart from "../cart/Cart";
import PropTypes from 'prop-types';

const Carts = ({cartStates, creditHour, price}) => {

    return (
        <div className="md:w-1/4 bg-white p-5">
            <h1 className="font-bold text-lg text-blue-700 pb-3">Credit Hour Remaining : {20 - creditHour}</h1>
            <hr />
       <h1 className="font-bold text-xl py-4 ">Course name</h1>
        {
            cartStates.map((cartState, i )=> <Cart  i={i} key={cartState.price}  cartState={cartState}></Cart>)
        }
         <hr />
            <h3 className="py-4 font-medium">Total credit hour: {creditHour}</h3>
            <hr />
            <h3 className="py-4 font-medium">Total price: {price} usd</h3>
    </div>
    );
};
Carts.propTypes = {
    cartStates: PropTypes.object,
    creditHour: PropTypes.number,
    price: PropTypes.number
}

export default Carts;