

const Course = ({course, handleCourse}) => {
    
    const {course_name , course_details,credit_hours,img,price} = course
    return (
        <div className="bg-white w-96 m-2  p-4">
            <img className="w-full" src={img} alt="" />
            <h1 className="font-semibold text-xl my-3">{course_name}</h1>
            <p className="text-gray-400">{course_details}</p>
            <p><span>$Price:{price}</span> <span>Credit:{credit_hours}</span></p>
            <button onClick={()=>handleCourse(course, credit_hours)} className="bg-blue-500 py-3 px-36 mt-3 rounded">Select</button>
        </div>
    );
};

export default Course;