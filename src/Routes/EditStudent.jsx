// TODO: answer here
import React, { useState, useEffect } from "react";

const EditStudent = ({ match, history }) => {
  // TODO: answer here
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/student/${match.params.id}`
        );
        const data = await response.json();
        setFormData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentData();
  }, [match.params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(`http://localhost:3001/student/${match.params.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      history.push("/student");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="edit-student">
      <h1>Edit Student</h1>
      <img src={formData.profilePicture} alt="Profile" />
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            data-testid="name"
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            data-testid="address"
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            data-testid="phoneNumber"
          />
        </label>
        <label>
          Birth Date:
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            data-testid="date"
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            data-testid="gender"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
        <label>
          Program Study:
          <select
            name="programStudy"
            value={formData.programStudy}
            onChange={handleChange}
            data-testid="prody"
          >
            <option value="">Select Program Study</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Manajemen">Manajemen</option>
            <option value="Akuntansi">Akuntansi</option>
            <option value="Administrasi Publik">Administrasi Publik</option>
            <option value="Administrasi Bisnis">Administrasi Bisnis</option>
            <option value="Hubungan Internasional">
              Hubungan Internasional
            </option>
            <option value="Teknik Sipil">Teknik Sipil</option>
            <option value="Arsitektur">Arsitektur</option>
            <option value="Matematika">Matematika</option>
            <option value="Fisika">Fisika</option>
            <option value="Informatika">Informatika</option>
          </select>
        </label>
        <button type="submit" data-testid="edit-btn">
          Edit Student
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
