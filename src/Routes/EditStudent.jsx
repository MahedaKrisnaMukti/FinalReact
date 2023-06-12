import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
    programStudy: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/student/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      programStudy,
    } = formData;

    const faculty = getFacultyByProgramStudy(programStudy);

    const updatedStudent = {
      fullname,
      profilePicture,
      address,
      phoneNumber,
      birthDate,
      gender,
      faculty,
      programStudy,
    };

    try {
      await fetch(`http://localhost:3001/student/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      });
      navigate("/student");
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const getFacultyByProgramStudy = (programStudy) => {
    switch (programStudy) {
      case "Ekonomi":
      case "Manajemen":
      case "Akuntansi":
        return "Fakultas Ekonomi";
      case "Administrasi Publik":
      case "Administrasi Bisnis":
      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";
      case "Teknik Sipil":
      case "Arsitektur":
        return "Fakultas Teknik";
      case "Matematika":
      case "Fisika":
      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "";
    }
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="edit-std">
          <div className="image">
            <img
              src={formData.profilePicture}
              alt="Profile"
              className="image"
            />
          </div>
          <form class="form-edit" onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                data-testid="name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                data-testid="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                data-testid="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="grid-container">
              <div>
                <label htmlFor="birthDate">Birth Date:</label>
                <input
                  type="date"
                  id="birthDate"
                  data-testid="date"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  data-testid="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="item">
              <label htmlFor="programStudy">Program Study:</label>
              <input
                type="text"
                id="programStudy"
                data-testid="prody"
                value={formData.programStudy}
                onChange={handleChange}
              />
            </div>
            <input
              type="submit"
              value="Edit Student"
              id="edit-btn"
              data-testid="edit-btn"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default EditStudent;
