import { useEffect, useState } from "react";
import { Read } from "./tempvalues";

export let Readpage = (position) => {

    var [details, setDetails] = useState (
        {
            name: "",
            age: 0,
            gender:"",
            email: "", 
            place: "",
            phonenumber: 0
        }
    )
    
    useEffect ( () => {
        setDetails(Read(position.give))
    },[position.give]) 
    // second argument is for temporary [position.give]//


    return (
        <>
         <div className="row justify-content-center fst-italic mt-5">
            <div className="card col-5">
                <h1 className="text-center card-title text-danger fw-bold text-decoration-underline fs-1 mt-4">INFORMATION</h1>
                <p className="card-text text-center mt-4 fs-4">
                    Hello GoodMorning.<br/>

                    First of all thankyou for giving this opportunity to introduce myself.<br/>

                    My name is Ashwin.J.<br/>

                    My hobbies are reading books, cooking, and listening to music.<br/>
                </p>
                <ol className="mt-3">
                    <li>{details.name}</li>
                    <li>{details.age}</li>
                    <li>{details.gender}</li>
                    <li>{details.email}</li>
                    <li>{details.place}</li>
                    <li>{details.phonenumber}</li>
                </ol>
            </div>
         </div>
        </>
    )
}