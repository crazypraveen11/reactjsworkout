import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export let Form = () => {
    var [details, setDetails] = useState(
        {
            name: "",
            age: 0,
            gender:"",
            email: "",
            place: "",
            phonenumber: 0
        })

        let Setter = (get) =>{
            var {name, value} = get.target;

            setDetails(
                (employee) => {
                    return {
                        ...employee,
                        [name]: value,
                    }
                }
            )
        }


        var Add = () =>
        {
            alert("Registered Successfully..!" + JSON.stringify(details) )
        }

return (
    <>
    <div className="row justify-content-center mt-3">
            <h1 className="text-center fst-italic ms-5"><ins><span style={{color: 'red'}}>Employee </span>DETAILS</ins></h1>
            <br></br>

        <form className=" row align-items-center  ms-3 col-lg-3 mt-4 me-4"> 

            <label className="form-label fw-bold">Name : </label>
            <input 
                type='text'
                className="form-control ms-5"
                onChange={Setter} 
                name='name' 
                value={details.name} 
                placeholder="Enter your Name"></input>
            <br></br><br></br>

            <label className="form-label fw-bold">Age : </label>
                <input 
                type='number' 
                className="form-control ms-5" 
                onChange={Setter} 
                name='age' 
                value={details.age} 
                placeholder="Enter your Age"></input>
             <br></br><br></br>

             <label className="form-label fw-bold" >Gender : </label>
            <input 
                type='radio' 
                name='gender' 
                value={details.gender} 
                onChange={Setter}> Male</input>
            <input 
                type='radio' 
                name='gender' 
                value={details.gender} 
                onChange={Setter}> Female</input>
            <input 
                type='radio' 
                name='gender' 
                value={details.gender} 
                onChange={Setter}> Other</input>
            <br></br><br></br>

            <label className="form-label fw-bold">Email : </label>
            <input 
                type='email' 
                className="form-control ms-5" 
                onChange={Setter} 
                name='email' 
                value={details.email} 
                placeholder="Enter your Email"></input>
            <br></br><br></br>

            <label className="form-label fw-bold">Place : </label>
            <input 
                type='text' 
                className="form-control ms-5" 
                onChange={Setter} 
                name='place' 
                value={details.place} 
                placeholder="Enter your Place"></input>
            <br></br><br></br>

            <label className="form-label fw-bold">Phone Number : </label>
            <input 
                type='number' 
                className="form-control ms-5" 
                name='phonenumber' 
                value={details.phonenumber}
                onChange={Setter} 
                placeholder="Enter your Phone Number"></input>
            <br></br><br></br>

            <div className="text-center mt-5">
            <button className="btn btn-success text-center" onClick={Add}>SUBMIT</button>
            </div>
        </form>
        </div>
    </>
)
}