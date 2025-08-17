import mongoose, { Document, Schema } from "mongoose";

export interface IActivity extends Document {
  id: string;
  title: string;
  date: string;
  image: string;
  category?: string;
  content: string;
}

const ActivitySchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, default: "Activity" },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Activity ||
  mongoose.model<IActivity>("Activity", ActivitySchema);
