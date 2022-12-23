import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [employee, setEmployee] = useState({});

  const { id } = useParams();

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/API/employee/${id}`);
    setEmployee(result.data);
  };



  useEffect(() => {
    loadEmployee();
  }, []);

  return (
    <div className="container d-flex-column justify-content-center">
      <h2 className="w-50 mx-auto">View Employee Detail</h2>
      <div className="form-floating mt-4">
        <input
          type="number"
          className="form-control"
          id="firstName"
          placeholder="Readonly input"
          value={employee.id}

          disabled
        />
        <label className="" for="firstName"></label>
      </div>
      <div className="form-floating mt-4">
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="First Name"
          value={employee.firstName}
        />
        <label className="" for="lastName">
          First Name
        </label>
      </div>
      <div className="form-floating mt-4">
        <input
          type="text"
          className="form-control"
          id="lastName"
          placeholder="last name"
          value={employee.lastName}
        />
        <label className="" for="lastName">
          Last Name
        </label>
      </div>
      <div className="form-floating mt-4">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          value={employee.email}
        />
        <label className="" for="email">
          Email
        </label>
      </div>
      <div className="form-floating mt-4">
        <input
          type="text"
          className="form-control"
          id="firstName"
          placeholder="name@example.com"
          value={employee.jobbTittel}
        />
        <label className="" for="jobbTitle">
          Jobb Title
        </label>
      </div>

      <div className="btn-group d-grid gap-3">
        <button type="button" className="btn btn-outline-success btn-block">
          <Link to={"/"}>HomePage</Link>
        </button>
        <button type="button" className="btn btn-outline-primary btn-block">
          <Link to={`/editEmployee/${employee.id}`}>Edit</Link>
        </button>
      </div>
    </div>
  );
}
