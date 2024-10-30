// Model
import { Schema, model } from "mongoose";

interface IBook {
  title: string;
  author: string;
  year: number;
  genre: string;
}

const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

export const Book = model<IBook>("Book", BookSchema);
