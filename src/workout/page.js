import  {React } from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from "../myform";
import { Showall } from "./tempvalues";
export let Homepage = () =>
{
    var [page , setPage] = useState(false);
    var [tempvalues, setTempvalues] = useState([]);

    useEffect( () => {
        setTempvalues(Showall);
    })

    return (
        <>

         {
            (page) ?
            <>
            <Form/>
            <button className="btn btn-outline-secondary"
            onClick={() => {
                setPage(false)
            }} >
                Back
            </button>
            </>
            :
            <>
                <button className="btn btn-outline-secondary"
                onClick={() => {
                    setPage(true)
                }}>
                Register
            </button>
            <div className="container mt-5">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Place</th>
                            <th>Phonenumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tempvalues.map(
                                (element) => 
                                <>
                                <tr>
                                <td>{element.name}</td>
                                <td>{element.age}</td>
                                <td>{element.gender}</td>
                                <td>{element.email}</td>
                                <td>{element.place}</td>
                                <td>{element.phonenumber}</td>
                                </tr>
                                </>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </>
         }
        </>
    )

}