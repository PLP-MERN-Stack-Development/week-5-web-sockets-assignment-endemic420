import {useState} from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

export default function App(){
  const [user, setUser]= useState (null)

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <Login setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>
  )
};