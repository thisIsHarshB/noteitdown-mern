export function getAllNotes (req, res){
    res.status(200).send("posts are here!");
};

export function createNote(req, res){
    res.status(201).send("note created successfuly!");
}

export function updateNote(req, res){
    res.status(200).send("note updated successfully!");
}

export function deleteNote(req, res){
    res.status(200).send("note deleted successfully!");
}