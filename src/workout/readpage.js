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


    return (
        <>
         <div className="row justify-content-center">
            <div className="card col-4">
                <h1 className="text-center card-title">Information</h1>
                <p className="card-text">
                    Hello GoodMorning.

                    First of all thankyou for giving this opportunity to introduce myself.

                    My name is Ashwin.J

                    My hobbies are reading books, cooking, and listening to music.
                </p>
                <ul>
                    <li>{details.name}</li>
                    <li>{details.age}</li>
                    <li>{details.gender}</li>
                    <li>{details.email}</li>
                    <li>{details.place}</li>
                    <li>{details.phonenumber}</li>
                </ul>
            </div>
         </div>
        </>
    )
}