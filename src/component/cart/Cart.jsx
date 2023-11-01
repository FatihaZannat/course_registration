
import PropTypes from 'prop-types';

const Cart = ({cartState, i}) => {
    const {course_name} = cartState
  
    return (
        <div className="">
            
            <h1 className='text-2xl'> 
            {i}.
             {course_name}</h1>
           
        </div>
    );
};
Cart.propTypes = {
   cartState: PropTypes.object,
   i: PropTypes.number
}
export default Cart;