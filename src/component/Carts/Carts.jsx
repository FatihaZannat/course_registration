import Cart from "../cart/Cart";

const Carts = ({cartStates}) => {

    return (
        <div className="md:w-1/4">
            <h1>cart: {cartStates.length}</h1>
        {
            cartStates.map((cartState, i )=> <Cart i={i} key={cartState.price}  cartState={cartState}></Cart>)
        }
    </div>
    );
};

export default Carts;