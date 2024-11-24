import mongoose from "mongoose";
const todoschema=new mongoose.Schema({
    name: {
        type: String,
        required: true, // The name is required
        trim: true, // Removes extra spaces
        minlength: 3,
    },
    description: {
        type: String,
        required: true, // The description is required
        trim: true,
    },
    status:{
        type:String,
        enum:["Completed", "Not Completed"],
        default:"Not Completed"
    }, createdAt: {
        type: Date,
        default: Date.now, // Automatically sets the current date and time
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Automatically sets the current date and time
    }, 
})
todoschema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
export const Todo=mongoose.model("Todo",todoschema) 