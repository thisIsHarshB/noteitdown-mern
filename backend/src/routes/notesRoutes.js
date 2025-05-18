import express from "express";
import {getAllNotes} from "/Users/Harsh/Desktop/todo-project/todo-project/todo-project/backend/src/controllers/notesController.js"
import {createNote} from "/Users/Harsh/Desktop/todo-project/todo-project/todo-project/backend/src/controllers/notesController.js"
import {updateNote} from "/Users/Harsh/Desktop/todo-project/todo-project/todo-project/backend/src/controllers/notesController.js"
import {deleteNote} from "/Users/Harsh/Desktop/todo-project/todo-project/todo-project/backend/src/controllers/notesController.js"
const router=express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;