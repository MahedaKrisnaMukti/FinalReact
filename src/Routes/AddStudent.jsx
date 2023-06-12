import { useState } from "react";
import React from "react";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const faculty = getFacultyByProgramStudy(programStudy);

    const studentData = {
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
      await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      });
      navigate("/student");
    } catch (err) {
      console.log(err);
    }
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
      <div className="container-student">
        <h3>Add Student</h3>
      </div>
      <br />
      <form id="form-student" onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="input-name">Fullname</label>
          <input
            type="text"
            id="input-name"
            data-testid="name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="input-profile">Profile Picture</label>
          <input
            type="text"
            id="input-profile"
            data-testid="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="input-address">Adress</label>
          <input
            type="text"
            id="input-address"
            data-testid="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="input-phone">Phone Number</label>
          <input
            type="text"
            id="input-phone"
            data-testid="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-date">Birth Date</label>
          <input
            type="date"
            id="input-date"
            data-testid="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-gender">Gender</label>
          <input
            type="text"
            id="input-gender"
            data-testid="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="input-prody">Program Study</label>
          <input
            type="text"
            id="input-prody"
            data-testid="prody"
            value={programStudy}
            onChange={(e) => setProgramStudy(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Add student"
          id="add-btn"
          data-testid="add-btn"
        />
      </form>
    </>
  );
};

export default AddStudent;
