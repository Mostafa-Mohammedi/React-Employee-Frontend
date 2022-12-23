import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployee() {
  //state to add user information to database
  const [employee, setEmployee] = useState({});
  // navigate back to main page
  const navigate = useNavigate();

  // function to update the state of the input fields

  const onChangeEmployee = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployee(values => ({...values, [name]: value}))
  };
  
  //submit function for sending the data back to the database
  const handleSubmit = async(event) => {
    event.preventDefault();
    await axios.post("http://localhost:8080/API/employee",employee);
    navigate("/");
  };

  return (
    <div className="border p-5 m-5">
      <div className="display-inline-flex-column justify-content-center align-items-center align-content-md-center">
        <h2 className="w-50 mx-auto">Register Employee</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={employee.firstName || ""}
              onChange={onChangeEmployee}
              required
            />
            <label className="form-label ">First Name</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Enter First Name"
              name="lastName"
              value={employee.lastName || ""}
              onChange={onChangeEmployee}
              required
            />
            <label className="form-label ">Last Name</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={employee.email || ""}
              onChange={onChangeEmployee}
              required
            />
            <label className="form-label ">Email</label>
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Jobb Title"
              name="jobbTittel"
              value={employee.jobbTittel || ""}
              onChange={onChangeEmployee}
              required
            />
            <label className="form-label ">Jobb Title</label>
          </div>
          <div class="d-flex justify-content-center p-3">
            <button type="submit" className="btn btn-outline-primary m-3">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger m-3">
              <Link className="btn" exact to="/">
                Cancel
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
