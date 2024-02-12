import  { React } from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from "../myform";
import { Showall } from "./tempvalues";
import { Readpage } from "./readpage";

export let Homepage = () =>
{
    var [page , setPage] = useState(false);
    var [tempvalues, setTempvalues] = useState([]);
    var [readpage , setReadpage] = useState(false);
    var [position , setPosition] = useState(0);    

    useEffect( () => {
        setTempvalues(Showall);
    },[])

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
              (readpage) ?
              <>

              <Readpage give={position} />
              <button className="btn btn-outline-secondary"
              onClick={() => {
                setReadpage(false)
              }}>
                Return
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tempvalues.map(
                                (element, index) => 
                                <>
                                <tr>
                                <td>{element.name}</td>
                                <td>{element.age}</td>
                                <td>{element.gender}</td>
                                <td>{element.email}</td>
                                <td>{element.place}</td>
                                <td>{element.phonenumber}</td>
                                <td>
                                        <>
                                        <button
                                        className="btn btn-outline-info"
                                        onClick={() => {
                                            setReadpage(true);
                                            setPosition(index)
                                        }} >Read</button>
                                        <button className="ms-2">Update</button>
                                        <button className="ms-2">Delete</button>
                                        </>
                                </td>
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