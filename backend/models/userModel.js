import mongoose, {Schema} from "mongoose";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        }
    },
    {
        timestamps : true
    }
)

// //to save password only when it's modified
// userSchema.pre("save", async function (next) {
//     if(!this.isModified("password")) return next();

//     this.password = await bcrypt.hash(this.password, 10)
//     next()
// })

//to check if the pasword is correct or not
userSchema.methods.isPasswordCorrect = async function (password){
    if (password === this.password) {
        return true;
      }
}

//generate access token
// userSchema.methods.generateAccessToken = function(){
//     return jwt.sign(
//         {
//             _id: this._id,
//             email: this.email,
//             fullName: this.fullName
//         },
//         process.env.ACCESS_TOKEN_SECRET,
//         {
//             expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//         }
//     )
// }

export const User = mongoose.model("User", userSchema)