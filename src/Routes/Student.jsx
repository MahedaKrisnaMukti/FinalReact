// TODO: answer here
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Student = () => {
  // TODO: answer here
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    filterStudents();
  }, [students, selectedFaculty]);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/student");
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  };

  const filterStudents = async () => {
    if (selectedFaculty === "All") {
      setFilteredStudents(students);
    } else if (selectedFaculty === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (student) => student.faculty === selectedFaculty
      );
      setFilteredStudents(filtered);
    }
  };

  const handleDelete = async (id) => {
    try {
      const url = `http://localhost:3001/student/${id}`;
      await fetch(url, {
        method: "DELETE",
      });
      const filtered = students.filter(
        (student) => student.faculty === selectedFaculty
      );
      setFilteredStudents(filtered);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <Navbar />
      <h1>All Student</h1>
      <select
        value={selectedFaculty}
        onChange={(e) => setSelectedFaculty(e.target.value)}
        data-testid="filter"
      >
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </select>
      {loading ? (
        <p>Loading ...</p>
      ) : (
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
            {filteredStudents &&
              filteredStudents.map((student, index) => (
                <tr key={student.id} className="student-data-row">
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/student/${student.id}`}>
                      {student.fullname}
                    </Link>
                  </td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(student.id)}
                      data-testid={`delete-${student.id}`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Student;
