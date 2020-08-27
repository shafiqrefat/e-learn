import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CourseList.css'

const CourseList = (props) => {
    const {name,price,image} = props.course;
    return (
        <div className='course-area'>
            <div className='image'>
                <img src={image} alt=""/>
            </div>
            <div className='course-details'>
                <h2>{name}</h2>
                <h4><small> $ {price}</small></h4>
                <button 
                className='enroll-button'
                onClick={()=>props.handleAddCourse(props.course)}
                ><FontAwesomeIcon icon={faShoppingCart} />  Enroll Now</button>
            </div>

        </div>
    );
};

export default CourseList;