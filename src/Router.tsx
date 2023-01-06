import React from "react";
import { Route,Routes } from "react-router-dom";
import RouterLayout from "./common/RouterLayout";
import { CharacterPage } from "./pages/character";
import { HomePage } from "./pages/Home";
import { LoginPage } from "./pages/Login";

export const AppRouter: React.FC<{}> =()=>{
    return(
        <Routes>
            <Route path="/"element={<RouterLayout/>}>
                <Route path="/"element={<HomePage/>}/>
                <Route path="/character/:id"element={<CharacterPage/>}/>  
            </Route>
            <Route path="/login"element={<LoginPage/>}/>
        </Routes>
    )
}