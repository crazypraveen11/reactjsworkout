import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

let Design = () => {
  return (
    <>
          <div className="row justify-content-center mt-3">
          <h1 className="text-center fst-italic ms-5"><ins><span style={{color: 'red'}}>STUDENT </span>DETAILS</ins></h1>
          <br></br>
      <form className=" row align-items-center  ms-3 col-lg-3 mt-4 me-4"> 
          <label className="form-label fw-bold">Name : </label>
          <input type='text' className="form-control ms-5" placeholder="Enter your Name"></input>
          <br></br><br></br>
          <label className="form-label fw-bold">Age : </label>
          <input type='number' className="form-control ms-5" placeholder="Enter your Age"></input>
           <br></br><br></br>
          <label className="form-label fw-bold">Email : </label>
          <input type='email' className="form-control ms-5" placeholder="Enter your Email"></input>
          <br></br><br></br>
          <label className="form-label fw-bold">Address : </label>
          <textarea className="form-control ms-5" placeholder="Enter your Address"></textarea>
          <br></br><br></br>
          <label className="form-label fw-bold">Phone Number : </label>
          <input type='number' className="form-control ms-5" placeholder="Enter your Phone Number"></input>
          <br></br><br></br>
          <label className="form-label fw-bold">PAN Number : </label>
          <input type='number' className="form-control ms-5" placeholder="Enter your PAN Number"></input>
          <br></br>
          <div className="text-center mt-5">
          <button className="btn btn-success text-center">SUBMIT</button>
          </div>
      </form>
      </div>
    </>
  );
}

export default Design;
