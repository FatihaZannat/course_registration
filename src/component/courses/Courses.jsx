import { useEffect, useState } from "react";
import Course from "../course/Course";

const Courses = ({handleCourse}) => {
    const [courses, setCourses] = useState([])
    useEffect(()=>{
        fetch('courses-data.json')
        .then(data => data.json())
        .then(res => setCourses(res))
    },[])
    return (
        <div className="grid grid-cols-3  md:w-3/4">
        {courses.map(course => <Course key={course.price} handleCourse={handleCourse} course={course}></Course>)}
        </div>
    );
};

export default Courses;