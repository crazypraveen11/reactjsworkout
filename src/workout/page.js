import  { React } from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from "../myform";
import { Fetchexact, Showall } from "./tempvalues";
import { Readpage } from "./readpage";
import {Erase} from "./tempvalues";
import { Updatepage } from "./updatepage";

export let Homepage = () =>
{
    var [page , setPage] = useState(false);
    var [tempvalues, setTempvalues] = useState([]);
    var [readpage , setReadpage] = useState(false);
    var [position , setPosition] = useState(0);  
    var [updatepage, setUpdatepage] = useState(false);
    var [obj, setObj] = useState([])

    useEffect( () => {
        setTempvalues(Showall);
    },[])

    return (
        <>

         {
            (page) ?
            <>
            <Form/>
            <button className="btn btn-outline-info ms-5"
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
              <button className="btn btn-outline-danger"
              onClick={() => {
                setReadpage(false)
              }}>
                Return
              </button>
              </>
            :
             (updatepage)?
             <>
             <Updatepage who= {position} mention={obj} />
             <button className="btn btn-outline-secondary"
             onClick={() => {
                setUpdatepage(false);
             }}
             >BACK</button>
             </>
             :
            <>
                <button className="btn btn-outline-success mt-5 ms-5"
                onClick={() => {
                    setPage(true)
                }}>
                Register
            </button>
            <div className="container mt-5 text-center">
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
                                        <button className="ms-2 btn btn-outline-success"
                                        onClick={()=>{
                                             setUpdatepage(true);
                                             setPosition(index);
                                             setObj(Fetchexact(element.name))
                                        }}
                                         >Update</button>
                                        <button className="ms-2 btn btn-outline-danger"
                                        onClick={()=>{
                                            setTempvalues(Erase(index));
                                        }}
                                         >Delete</button>
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