import express from "express";
import { createtodo, deletetodo, getalltodo, getbyid, updatetodo } from "../Controllers/todo.controller.js";
const router=express.Router()
router.post("/create",createtodo)
router.get("/getalltodos",getalltodo)
router.put("/updatetodo/:id",updatetodo)
router.get("/todo/:id",getbyid)
router.delete("/deletetodo/:id",deletetodo)
export default router