import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { ProfileIndex } from "./ProfileIndex";
import { ExperienceNew } from "./ExperienceNew";
import { EducationIndex } from "./EducationIndex";
import { EducationNew } from "./EducationNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [profiles, setProfiles] = useState([]);
  const [educations, setEducations] = useState([]);

  const handleIndexProfiles = () => {
    console.log("handleIndexProfiles");
    axios.get("http://localhost:3000/profiles.json").then((response) => {
      console.log(response.data);
      setProfiles(response.data);
    });
  };

  const handleIndexEducations = () => {
    console.log("handleIndexEducations");
    axios.get("http://localhost:3000/educations.json").then((response) => {
      console.log(response.data);
      setEducations(response.data);
    });
  };

  const handleCreateEducation = (params, successCallback) => {
    console.log("handleCreateEducation", params);
    axios.post("http://localhost:3000/educations.json", params).then((response) => {
      setEducations([...educations, response.data]);
      successCallback();
    });
  };
  useEffect(handleIndexProfiles, []);
  useEffect(handleIndexEducations, []);
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/experiencenew" element={<ExperienceNew />} />
        <Route path="/profileindex" element={<ProfileIndex profiles={profiles} />} />
        <Route path="/educationindex" element={<EducationIndex educations={educations} />} />
        <Route path="/educationnew" element={<EducationNew onCreateEducation={handleCreateEducation} />} />
      </Routes>
    </div>
  );
}
