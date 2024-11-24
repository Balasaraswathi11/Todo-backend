import { Todo } from "../Schema/todo.schema.js";

export const createtodo = async (req, res) => {
    const { name, description, status } = req.body;
    try {
        // Corrected code: Create a new Todo instance and save it
        const newtodo = await Todo.create({ name, description, status });

        // Send successful response
        res.status(201).json({ message: "Todo successfully created", newtodo });
    } catch (error) {
        // Send error response
        res.status(500).json({ message: "Error creating todo", cause: error.message });
    }
};

export const getalltodo=async(req,res)=>{
    try {
        const alltodo= await Todo.find()
        res.status(200).json({message:"Todo fetched",alltodo})
    } catch (error) {
        res.status(500).json({message:"error",cause:error.message})
    }
}

export const updatetodo=async(req,res)=>{
    try {
        const{id}=req.params
        const{name,description,status}=req.body
        const existingtodo=await Todo.findById(id)
        if(!existingtodo){
            res.status(401).json({message:"not found"})
        }
        existingtodo.name=name||existingtodo.name
        existingtodo.description=description||existingtodo.description
         existingtodo.status=status||existingtodo.status
        
        const updatetodo=await existingtodo.save()
        res.status(200).json({message:"Todo updated successfully",updatetodo})
    } catch (error) {
        res.status(500).json({message:"error",cause:error.message})
    }

    
}

export const getbyid=async(req,res)=>{
    
    try {
        const {id}=req.params
        const todobyid= await Todo.findById(id)
        if (!todobyid) {
            return res.status(404).json({ message: 'Todo not found' });
          }
        res.status(200).json({message:"todo fetched",todobyid})
    } catch (error) {
        res.status(500).json({message:"error",cause:error.message})
    }
   
}
export const deletetodo=async(req,res)=>{
    
    try {
        const {id}=req.params
        const deletetodo= await Todo.findByIdAndDelete(id)
        if (!deletetodo) {
            return res.status(404).json({ message: 'Todo not found' });
          }
        res.status(200).json({message:"todo deleted",deletetodo})
    } catch (error) {
        res.status(500).json({message:"error",cause:error.message})
    }
   
}