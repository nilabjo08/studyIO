import mongoose, {Schema} from "mongoose";

const feedbackSchema = new Schema(
    {
        feedback: {
            type: String,
        },
    }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);

