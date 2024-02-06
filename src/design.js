import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {useState} from "react"

export var Firsthook = () => {

    let [studentname, setStudentname] = useState("");

     var setter =(temp) =>{
        setStudentname(temp.target.value)
    }

 var getter = ()=> {

    alert("Student name is:" +studentname);
}

return(
    <>
    <div className="row justify-content-center">
        <div className="col-5">
            <input onChange={setter}
             placeholder="Enter your Name"
            className="form-control">
            </input>
            <br></br>
            <button onClick={getter} className="btn btn-outline-success">Submit</button>
        </div>
    </div>
    </>
)

}
