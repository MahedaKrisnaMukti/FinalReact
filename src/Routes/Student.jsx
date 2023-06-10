// TODO: answer here
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/style.css";

const Student = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error: ", error);
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <h2>All Students</h2>
      <table id="table-student">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="student-data-row">
              <td>{index + 1}</td>
              <td>
                <Link to={`/student/${student.id}`}>{student.fullname}</Link>
              </td>
              <td>{student.faculty}</td>
              <td>{student.programStudy}</td>
              <td>
                <button
                  onClick={() => deleteStudent(student.id)}
                  data-testid={`delete-${student.id}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
