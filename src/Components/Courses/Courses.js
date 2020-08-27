import React from 'react';
import fakeData from '../../fakeData/courses'
import { useState } from 'react';
import './Courses.css';
import CourseList from '../CourseList/CourseList';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [courses,setCourses] = useState(fakeData);
    const [cart,setCart] = useState([]);
    const handleAddCourse = (course) => {
        console.log('Course Added',course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
    
    console.log(fakeData);
    return (
        <div className='main-container'> 
            <div className="course-container">
                {
                    courses.map(course=><CourseList 
                        course={course}
                        handleAddCourse={handleAddCourse}
                        ></CourseList>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Courses;