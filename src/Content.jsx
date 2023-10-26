import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { UsersShow } from "./UsersShow";
import { ExperienceNew } from "./ExperienceNew";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/usersshow" element={<UsersShow />} />
        <Route path="/experiencenew" element={<ExperienceNew />} />
      </Routes>
    </div>
  );
}
