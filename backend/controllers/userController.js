import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/userModel.js";
import { ApiResponse } from "../utils/ApiResponse.js";
 

const registerUser = asyncHandler(async (req,res) => {
    //get user details from frontend
    //user details validation - not empty
    //check if user already exists
    //create user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response

    //extracted all the datapoints
    const {fullName,email,password} = req.body
    console.log("email", req.body);
    //to check whether any of the field is empty or not
    if(
        [fullName, email, password].some((field) =>
        field?.trim() === "")
    ){
        throw new ApiError(400, "All fields are required");
    }
    //to check whether the user already exists or not
    const existedUser = await User.findOne({ email: email })
    console.log("Existed", existedUser)
    if(existedUser){
        throw new ApiError(409, "User already exists")
    }
    //create an object 
    const user = await User.create(req.body)
        console.log(user);

    return res.status(201).json(
        new ApiResponse(200, user, "User Registered Successfully")
    )
} )


const loginUser = asyncHandler(async (req,res) => {
    //req body -> data
    //username or email based access
    //find the user
    //check the password
    //access and refresh token
    //send cookie

    const {email, password} = req.body

    if(!email) {
        throw new ApiError(400, "Email is required")
    }

    const user = await User.findOne({ email: email })

    if(!user){
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    console.log(isPasswordValid)
    if(isPasswordValid){
        const loggedInUser = await User.findById(user._id)

    return res.status(200)
    .json(
        new ApiResponse(200, {
            user: loggedInUser
        }, 
        "User Logged In Successfully"))
    }
    else{
        throw new ApiError(401, "Password Invalid")
    }
    

        

})

// const logoutUser = asyncHandler(async (req,res) =>{
//    await  User.findByIdAndUpdate(
//         req.user._id,
//         {
//             new: true
//         }
//     )

//     return res.status(200)
//     .json(new ApiResponse(200, {}, "User Logged out"))

// })


export {
    registerUser,
    loginUser
}