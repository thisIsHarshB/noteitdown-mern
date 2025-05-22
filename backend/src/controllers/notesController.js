import Note from "../models/Note.js";

export async function getAllNotes (_, res){
    try {
        const notes=await Note.find().sort({createdAt : -1}); // sort the notes; -1 to get desc. order(newest first).
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message: "Internal server error"});
    }
};

export async function createNote(req, res){
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller", error)
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateNote(req, res){
    try {
        const {title, content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true});
        if(!updatedNote)    return res.status(404).json({message:"Note NOT FOUND!"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote controller", error)
        res.status(500).json({message: "Internal server error"});
    }
}

export async function deleteNote(req, res){
    try {
        const toDel = await Note.findByIdAndDelete(req.params.id);
        if(!toDel)  return res.status(404).json({message : "note NOT FOUND!"});
        res.status(200).json({message : "note deleted successfully!"}); 
    } catch (error) {
        console.error("Error in deleteNote controller", error)
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getMyNote(req, res){
    try {
        const myNote = await Note.findById(req.params.id);
        if(!myNote) return res.status(404).json({message : "note NOT FOUND!"});
        res.status(200).json(myNote);
    } catch (error) {
        console.error("Error in getMyNote controller", error)
        res.status(500).json({message: "Internal server error"});
    }
}