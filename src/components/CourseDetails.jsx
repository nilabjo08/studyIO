import React, { useEffect, useState } from 'react';
import COURSES from './CoursesData';
import { useParams } from 'react-router-dom';
import FeedbackInput from './FeedbackInput';


const CourseDetails = () => {
  const [data, setData] = useState(null);
  const {courseId} = useParams();

 

  const getCourse = () => {
    const course = COURSES.find((course) => course.id === parseInt(courseId));
    setData(course);
  }

  
  useEffect(() => {
    getCourse()
  }, [])

  

  return (
    <div className='deets'>
        <div className='cd-card'>
          <h1 >{data?.heading}</h1>
          <p>{data?.data}</p>
          <p style={{textAlign: "center"}}>{data?.description}</p>
          <br></br>
          <iframe className='cd-video' width="560" height="315" src={`https://www.youtube.com/embed/${data?.v_path1}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <iframe className='cd-video' width="560" height="315" src={`https://www.youtube.com/embed/${data?.v_path2}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <br></br>
          
        </div>
        <FeedbackInput/>
    </div>
  );
};

export default CourseDetails;