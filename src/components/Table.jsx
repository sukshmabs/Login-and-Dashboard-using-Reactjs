import React, { useState, useEffect } from "react";

const Table = () => {
  const [employeeslist, setemployees] = useState(null);
  useEffect(() => {
    getemployees();
  }, []);
  const getemployees = () => {
    fetch(" https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
      .then((res) => res.json())
      .then(
        (result) => {
          setemployees(result);
        },
        (error) => {
          setemployees(null);
        }
      );
  };
  if (!employeeslist) return <div>Loading...</div>;

  return (
    <div className="App">
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>created on</th>
          <th>Balance</th>
        </thead>
        <tbody>
          {employeeslist.map((emp) => (
            <tr key={emp.first}>
              <td>{emp.first}</td>
              <td>{emp.last}</td>
              <td>{emp.email}</td>
              <td>{emp.address}</td>
              <td>{emp.created}</td>
              <td>{emp.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
