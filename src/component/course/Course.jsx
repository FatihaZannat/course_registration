import PropTypes from 'prop-types';
import { BsBook } from 'react-icons/Bs';

const Course = ({course, handleCourse}) => {
    
    const {course_name , course_details,credit_hours,img,price} = course
    return (
        <div className="bg-white w-96 m-2  p-4">
            <img className="w-full" src={img} alt="" />
            <h1 className="font-semibold text-xl my-3">{course_name}</h1>
            <p className="text-gray-400">{course_details}</p>
            <div className='flex justify-start py-3'>
                <span>$ Price:{price}</span>
                <div className='flex pl-5 items-center gap-1'>
                <span><BsBook/>  </span>
                <span> Credit:{credit_hours}</span>
                </div>
             </div>
            
            <button onClick={()=>handleCourse(course, credit_hours , price)} className="bg-blue-500 py-3 px-36 mt-3 rounded">Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleCourse: PropTypes.func,
    course_name: PropTypes.string,
    course_details: PropTypes.string,
    credit_hours: PropTypes.number,
    img: PropTypes.string,
    price: PropTypes.number
}
export default Course;