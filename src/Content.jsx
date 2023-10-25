import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { UserNew } from "./UserNew";
import { ExperienceNew } from "./ExperienceNew";

export function Content() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/usernew" element={<UserNew />} />
        <Route path="/experiencenew" element={<ExperienceNew />} />
      </Routes>
    </div>
  );
}
