import {Router} from "express";
import { Feedback } from "../models/feedbackModel.js";

const router = Router()

router.post("/feedback", async (req, res) => {
  const feedback = new Feedback({
    feedback: req.body.feedback,
  });

  try {
    const savedFeedback = await feedback.save();
    res.status(201).json(savedFeedback);
    console.log(savedFeedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router