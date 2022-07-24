import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    
    todo: {
        type: String,
		required: [true, "Please add a todo text value"],
    },
    completed: {
        type: Boolean,
        default: false
    },
   
},
{
    timestamps: true,
}
)

// define the collection called "Todo" with the todo schema
export default mongoose.model("Todo", todoSchema)

