import React, { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import axios from 'axios';

const Contact = () => {
  const [fullName, setFullName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     axios.post( 'http://localhost:4000/api/v1/users/register', {fullName, username, email, password})
//     .then(result => {
//         console.log(result);
//         if(result.data === "User already exists"){
//             alert("E-mail already registered! Please Login to proceed.");
            
//         }
//         else{
//             alert("Registered successfully! Please Login to proceed.")
            
//         }
        
//     })
//     .catch(err => console.log(err));
// }

const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
      const result = await axios.post( 'http://localhost:4000/api/v1/users/register', {fullName, username, email, password});
      console.log(result);
      if(result.data === "User already exists"){
          alert("E-mail already registered! Please Login to proceed.");
          
      }
      else{
          alert("Registered successfully! Please Login to proceed.")
          
      }
  } catch (err) {
      console.log(err);
  }
}
  console.log("Full Name:", fullName, "User Name:", username);

  return (
    <>
      <form className='reg-form' onSubmit={handleSubmit}>
          <h2>Register Form</h2>
          <div className="input-container">
            <label htmlFor="fullname" className="form-label">
            <TfiEmail />
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Eg: Annesha Naskar"
            required
            onChange={(e) => setFullName(e.target.value)}
          />
           </div>

           <div className="input-container">
            <label htmlFor="username" className="form-label">
            <TfiEmail />
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Eg: namv145"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
           </div>
           <div className="input-container">
            <label htmlFor="email" className="form-label">
            <TfiEmail />
            Email
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Eg: name@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
           </div>
           <div className="input-container">
            <label htmlFor="email" className="form-label">
            <TfiEmail />
            Password
          </label>
          <input
            type="password" 
            className="form-control"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
           </div>

       <button className="btn btn-success">SUBMIT</button>
      </form>
    </>
  )
}

export default Contact


// import React, { useState } from "react";
// import { TfiEmail } from "react-icons/tfi";
// import { RiFeedbackLine } from "react-icons/ri";
// import { LiaPhoneSolid } from "react-icons/lia";

// const Contact = () => {
//   const [data, setData] = useState({
//     email: "",
//     phone: "",
//     message: "",
//   });

//   console.log("this is data:", data);

//   return (
//     <>
//       <div className="container">
//         <form>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//             <TfiEmail />
//               Email
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Eg: name@example.com"
//               onChange={(e) => setData({ ...data, email: e.target.value })}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="phone" className="form-label">
//             <LiaPhoneSolid />
//               Phone
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="phone"
//               onChange={(e) => setData({ ...data, phone: e.target.value })}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="message" className="form-label">
//             <RiFeedbackLine />
//               Your Message
//             </label>
//             <textarea
//               name=""
//               id=""
//               cols="30"
//               rows="10"
//               className="form-control"
//               onChange={(e) => setData({ ...data, message: e.target.value })}
//             ></textarea>
//           </div>
//           <button className="btn btn-success">SUBMIT</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Contact;
