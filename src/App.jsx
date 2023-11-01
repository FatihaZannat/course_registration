
import { useState } from 'react'
import './App.css'
import Courses from './component/courses/Courses'
import Carts from './component/Carts/Carts'

function App() {
const [cartStates, setCartState] = useState([])
const [creditHour, setCreditHour] = useState(0)

  const handleCourse =(course, credit_hours) => {
    console.log(course);
  cartStates.includes(course) ? 
  alert('this list already exist') : setCartState([...cartStates,course])
   setCreditHour(creditHour + credit_hours)
   console.log(creditHour);
  }

  return (
    <>
   <h1 className='text-3xl font-bold text-center my-12'>Course Registration</h1>
   <div className='flex'>
   <Courses handleCourse={handleCourse}></Courses>
   <Carts cartStates={cartStates} creditHour={creditHour}></Carts>
   </div>
    </>
  )
}

export default App
