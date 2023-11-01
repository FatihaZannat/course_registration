
import { useState } from 'react'
import './App.css'
import Courses from './component/courses/Courses'
import Carts from './component/Carts/Carts'

function App() {
const [cartStates, setCartState] = useState([])

  const handleCourse =(course) => {
    setCartState([...cartStates, course])
  }
  
  return (
    <>
   <h1 className='text-3xl font-bold text-center my-12'>Course Registration</h1>
   <div className='flex'>
   <Courses handleCourse={handleCourse}></Courses>
   <Carts cartStates={cartStates}></Carts>
   </div>
    </>
  )
}

export default App
