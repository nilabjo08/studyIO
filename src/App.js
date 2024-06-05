import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Contact from "./pages/Contact";
import "./App.css";
import SideBar from "./components/SideBar";
import About from "./pages/About";
import CourseDetails from "./components/CourseDetails";
import CourseCard from "./components/CourseCard";
import { useState } from "react";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome from "./pages/Welcome";
import Blog from "./pages/Blog";
import CreatePost from "./components/CreatePost";
import BookList from "./pages/BookList";
import BookDetail from "./components/BookDetail";

function App() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <BrowserRouter>
      <SideBar isActive={isActive} setIsActive={setIsActive} />
      <div className="mainpage">
        <Header setIsActive={setIsActive}  />
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course" element={<CourseCard />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route exact path="/book" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
