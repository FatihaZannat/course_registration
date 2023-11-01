import Cart from "../cart/Cart";

const Carts = ({cartStates, creditHour}) => {
// // const {price} = cartStates[0]
// console.log(cartStates[0].price);
    return (
        <div className="md:w-1/4 bg-white">
            <h1>Credit Hour Remaining : {cartStates.length}</h1>
        {
            cartStates.map((cartState, i )=> <Cart i={i} key={cartState.price}  cartState={cartState}></Cart>)
        }
         <hr />
            <h3>Total credit hour: {creditHour}</h3>
            <hr />
            <h3>Total price: {} usd</h3>
    </div>
    );
};

export default Carts;