import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        phonenumber: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        maritalstatus: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        gender: {
            type: String,
            required: true
        },
        staetoforigin: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        nameofschool: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        courseofstudy: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        levelinschool: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        lodge: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
       date: {
            type: Date,
            default: Date.now
        }

    },
    { timestamps: true },

);

export const User = mongoose.model("Attandance", userSchema);
