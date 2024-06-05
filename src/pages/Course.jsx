import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import CourseCard from '../components/CourseCard';

   

const About = () => {
    
    
  return (
    <>
    {/*   ____________swiper image card___________________   */}
    <section className="swiper-img-card">
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        speed={4000}
        autoplay={{
                    delay: 1000,
                }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="col-i">
            <img src={require("../assets/AI-2.jpg")} alt="" />
            <h3>Artificial Intelligence</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="col-i">
            <img src={require("../assets/dbms.jpg")} alt="" />
            <h3>Database Management</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="col-i">
            <img src={require("../assets/de-4.jpg")} alt="" />
            <h3>Computer Architecture</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="col-i">
            <img src={require("../assets/javascript.jpg")} alt="" />
            <h3>JavaScript</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="col-i">
            <img src={require("../assets/java-1.jpg")} alt="" />
            <h3>Java Programming</h3>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="col-i">
            <img src={require("../assets/web.jpg")} alt="" />
            <h3>Web Development</h3>
        </div>
        </SwiperSlide>
      </Swiper>

    </section>
   
    {/*   ____________course seletion card___________________   */}
    <div className="course_card">
        <h1>Available Courses</h1>
        <p>Explore from our wide range of courses. More courses to be added. Do let use know your feedback!!</p>
    <CourseCard />
    </div>

     {/*   ____________swiper popular course card___________________   */}
     <section className="swiper-card-popular">
        <h1>What People Say About Us</h1>
        <p>Course reviews from our customer base</p>
        <div className="swipe">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        speed={4000}
        autoplay={{
                    delay: 1000,
                }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="colc">
            <div className="cardc">
                <h4>Emma L.</h4>
                <p>"An outstanding Java programming course! It covers everything from the basics to more complex topics. The instructor's clear explanations and real-world examples made it easy to follow and learn. Perfect for all levels!"</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="colc">
            <div className="cardc">
                <h4>Sarah M.</h4>
                <p>"I had some basic knowledge of C, but this course really solidified my understanding. The advanced concepts were explained clearly and concisely. Great course for both newbies and those looking to refresh their skills."</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="colc">
            <div className="cardc">
                <h4>Alex T.</h4>
                <p>"The best course I have taken on operating systems. The material was well-organized and the instructor's expertise was evident. The practical exercises helped bridge the gap between theory and practice. Highly recommend."</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="colc">
            <div className="cardc">
                <h4>John D.</h4>
                <p>"This course provided a thorough understanding of Android app development. The practical examples and hands-on projects were incredibly helpful. Highly recommend for anyone looking to get started with Android."</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="colc">
            <div className="cardc">
                <h4>Michael B.</h4>
                <p>"Very comprehensive and informative. I liked how the course included both front-end and back-end development. Some sections could use more detailed explanations, but overall, a great learning experience."</p>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="colc">
            <div className="cardc">
                <h4>Laura T.</h4>
                <p>"This course is a gem for anyone interested in web development. The instructors are knowledgeable, and the content is up-to-date with the latest industry standards. I now feel confident building full-stack web applications."</p>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
    </>
  )
}

export default About