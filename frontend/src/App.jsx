import React from 'react';
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetailsPage from "./pages/NoteDetailsPage";
import {toast} from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="dim">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/note/:id" element={<NoteDetailsPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App