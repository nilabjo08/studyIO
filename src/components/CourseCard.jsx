import React from 'react';
import { Link } from 'react-router-dom';
import COURSES from './CoursesData';

const CourseCard = () => {

  return (
    <>
      <div className="row">
        {COURSES.map(courses =>(
            <div key= {courses.id} className="col">
                <img src={courses.image} sizes='20' className='course-image' alt="" />
                <h4>{courses.heading}</h4>
                <p>{courses.data}</p><br></br>
                <Link to={`/courses/${courses.id}`}>
                  <button className='enroll-btn'>Enroll Now</button>
                </Link>
            </div>
        ))}
      </div>
    </>
  );
};

export default CourseCard;