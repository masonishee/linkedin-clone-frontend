import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { UsersShow } from "./UsersShow";
import { ExperienceNew } from "./ExperienceNew";
import { EducationIndex } from "./EducationIndex";

export function Content() {
  const user = [
    {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone_number: "123-456-7890",
      linkedin_url: "https://www.linkedin.com/in/johndoe",
      personal_url: "https://www.johndoe.com",
      resume_url: "https://www.johndoe.com/resume",
      github_url: "https://github.com/johndoe",
      twitter: "@johndoe",
      photo: "https://www.example.com/johndoe.jpg",
    },
  ];
  const education = [
    {
      start_date: "2015-09-01",
      end_date: "2019-06-30",
      degree: "Bachelor of Science in Computer Science",
      university: "Fictional University",
      details:
        "Studied various programming languages and computer science concepts, specializing in artificial intelligence and machine learning.",
    },
    {
      start_date: "2018-08-15",
      end_date: "2020-05-31",
      degree: "Master of Business Administration",
      university: "Imaginary Business School",
      details:
        "Focused on strategic management and global business operations, with a specialization in finance and international trade.",
    },
    {
      start_date: "2021-01-10",
      end_date: "2023-05-20",
      degree: "Master of Science in Electrical Engineering",
      university: "Virtual Institute of Technology",
      details:
        "Explored advanced topics in electrical systems design and optimization, with an emphasis on renewable energy technologies and power electronics.",
    },
  ];
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/experiencenew" element={<ExperienceNew />} />
        <Route path="/usersshow" element={<UsersShow />} />
        <Route path="/educationindex" element={<EducationIndex />} />
      </Routes>
      <UsersShow user={user} />
      <EducationIndex education={education} />
    </div>
  );
}
