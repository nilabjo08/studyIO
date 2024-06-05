import React from "react"
import o1 from "../assets/online/o1.png"
import oa from "../assets/online/o1.1.png"
import o2 from "../assets/online/o2.png"
import ob from "../assets/online/o2.1.png"
import o3 from "../assets/online/o3.png"
import oc from "../assets/online/o3.1.png"
import o4 from "../assets/online/o4.png"
import od from "../assets/online/o4.1.png"
import o5 from "../assets/online/o5.png"
import oe from "../assets/online/o5.1.png"
import o6 from "../assets/online/o6.png"
import of from "../assets/online/o6.1.png"
import o7 from "../assets/online/o7.png"
import og from "../assets/online/o7.1.png"
import o8 from "../assets/online/o8.png"
import oh from "../assets/online/o8.1.png"
import o9 from "../assets/online/o9.png"
import oi from "../assets/online/o9.1.png"
import o10 from "../assets/online/o10.png"
import oj from "../assets/online/o10.1.png"
import o11 from "../assets/online/o11.png"
import ok from "../assets/online/o11.1.png"
import o12 from "../assets/online/o12.png"
import ol from "../assets/online/o12.1.png"

const OnlineCourses = () => {
    const online = [
        {
          hoverCover: o1,
          cover: oa,
          courseName: "UI/UX Design",
          course: "25 Courses",
        },
        {
          hoverCover: o2,
          cover: ob,
          courseName: "Fine Art & Design ",
          course: "25 Courses",
        },
        {
          hoverCover: o3,
          cover: oc,
          courseName: "Computer Science",
          course: "10 Courses",
        },
        {
          hoverCover: o4,
          cover: od,
          courseName: "History & Archeologic",
          course: "15 Courses",
        },
        {
          hoverCover: o5,
          cover: oe,
          courseName: "Software Engineering",
          course: "30 Courses",
        },
        {
          hoverCover: o6,
          cover: of,
          courseName: "Information Software",
          course: "60 Courses",
        },
        {
          hoverCover: o7,
          cover: og,
          courseName: "Health & Fitness",
          course: "10 Courses",
        },
        {
          hoverCover: o8,
          cover: oh,
          courseName: "Finance and Marketing",
          course: "30 Courses",
        },
        {
          hoverCover: o9,
          cover: oi,
          courseName: "Graphic Design",
          course: "80 Courses",
        },
        {
          hoverCover: o10,
          cover: oj,
          courseName: "Music and Instruments",
          course: "120 Courses",
        },
        {
          hoverCover: o11,
          cover: ok,
          courseName: "Business Administration",
          course: "17 Courses",
        },
        {
          hoverCover: o12,
          cover: ol,
          courseName: "Web Management",
          course: "17 Courses",
        },
      ]
  return (
    <>
      <section className='online'>
        <div className='container-online'>
          
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box' key={val}>
                <div className='img'>
                  <img src={val.cover} alt='cover'  />
                  <img src={val.hoverCover} alt ='hover' className='show'/>
                  
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
