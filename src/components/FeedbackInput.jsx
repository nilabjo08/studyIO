import React, { useState } from "react";
import axios from "axios";

const FeedbackInput = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const feed = await axios.post("http://localhost:4000/api/v1/form/feedback", {feedback});
        console.log(feed);
        setFeedback("");
        alert("Feedback submitted successfully!");
        
    } catch (error) {
      console.error(error);
      alert("Error submitting feedback");
    }
  };

  return (
    <div className="feedback-input">
        <p>Please share your feedback regarding the video. Do let us know what you liked and disliked!</p>
        <textarea
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
        />
        <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default FeedbackInput;