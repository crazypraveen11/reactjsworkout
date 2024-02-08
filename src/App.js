// import { Navigate } from "./navigation";
// import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Design from "./form";
import { Form } from "./myform";

export function App(){

    return(
        <>
        {/* <BrowserRouter>
        <Navigate/>
        <Routes>
            <Route path="home" exact element={<Design />} />
        </Routes>
        </BrowserRouter> */}
        < Form/>
        </>
    )
}