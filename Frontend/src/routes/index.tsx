import { createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import Home from "../Pages/Home";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<>
       <Home></Home>
        
        </>}/>
        </>
    )
)

export default Router;