import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function HomePage() {
  //ustestate for handling the changes of state for the employee

  const [employeeDB, setEmployeeDB] = useState([]);
  const [employeeDbError, setEmployeeDbError] = useState(null);
  // get endpoints
  const baseURL = "http://localhost:8080/API/employee/addAll";

  const { id } = useParams();
  //useparams
  const getEmployeeList = async () => {
    try {
      const response = await axios.get(baseURL);
      setEmployeeDB(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployeeList();
  }, []);

  const loadEmployee = async () => {
    try {
      const result = await axios.get(baseURL);
      setEmployeeDB(result.data);
    } catch (error) {
      setEmployeeDbError(error);
    }
  };

  const deleteEmplooyee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/API/employee/delete/${id}`);
      loadEmployee();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2 className="w-50 mx-auto">Employee List</h2>
      <div className="table-responsive">
        <table className="table table-sm table-hover m-5 p-5 d-flex-column align-items-center flex-wrap">
          <thead className="table-secondary">
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Job Titles</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeDB.map((employee, index) => (
              <tr>
                <th scope="row">{employee.id}</th>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.jobbTittel}</td>
                <td className="btn-group-vertical btn-group-md container-fluid">
                  <button className="btn btn-outline-primary  my-1 border">
                    <Link to={`/viewEmployee/${employee.id}`}>View</Link>
                  </button>

                  <button
                    className="btn btn-outline-danger my-1 border"
                    onClick={() => deleteEmplooyee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
