import React from "react";
import { FaAngleRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import OnlineCourses from "../components/OnlineCourses";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";

const Home = () => {
  return (
    <>
      <div className="hero">
        <img src={require("../assets/banner-4.png")} alt="banner" />
      </div>
      <div className="line"></div>
      <div className="top">
        <div className="row">
          <div className="col">
            <p>Explore our courses!</p>
            <Link to={"/course"}>
              <div className="back_to_course">
                <FaAngleRight />
              </div>
            </Link>
          </div>
          <div className="col">
            <p>Get your hand on our e-library</p>
            <Link to={"/book"}>
              <div className="back_to_course">
                <FaAngleRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/*   ____________Categories course card___________________   */}
      <section className="online-course-c">
        <h1>Categories</h1>
        <p>Explore a diverse range of subjects tailored to your interests. Advance your skills with courses designed for every learning level.</p>
        <OnlineCourses />
      </section>
      {/*   ____________image hover text course card___________________   */}
      <section className="courseHover">
        <h1>Get to know about our courses</h1>
        <p>Discover the unique benefits and opportunities each course offers. Learn from industry experts and gain practical, hands-on experience.</p>
        <ImageCard />
      </section>
      {/*   ____________swiper popular course card___________________   */}
      <section className="swiper-card-popular">
        <h1>Our Popular Courses</h1>
        <p>
          Unlock your potential with cutting-edge training and expert guidance.
        </p>
        <div className="swipe">
          <Swiper
            slidesPerView={3}
            spaceBetween={25}
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
            <SwiperSlide className="row-home">
              <div className="col-home">
                <div className="card-home">
                  <h1>Digital Electronics</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde similique facere totam saepe autem quibusdam sapiente
                    dolorem nobis architecto veniam!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="row-home">
              <div className="col-home">
                <div className="card-home">
                  <h1>Java Programming</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde similique facere totam saepe autem quibusdam sapiente
                    dolorem nobis architecto veniam!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="row-home">
              <div className="col-home">
                <div className="card-home">
                  <h1>Software Engineering</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde similique facere totam saepe autem quibusdam sapiente
                    dolorem nobis architecto veniam!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="row-home">
              <div className="col-home">
                <div className="card-home">
                  <h1>Computer Architecture</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde similique facere totam saepe autem quibusdam sapiente
                    dolorem nobis architecto veniam!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="row-home">
              <div className="col-home">
                <div className="card-home">
                  <h1>Python Programming</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde similique facere totam saepe autem quibusdam sapiente
                    dolorem nobis architecto veniam!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="row-home">
              <div className="col-home">
                <div className="card-home">
                  <h1>Numerial Methods</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Unde similique facere totam saepe autem quibusdam sapiente
                    dolorem nobis architecto veniam!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
