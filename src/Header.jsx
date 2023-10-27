import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/profileindex">Profiles</Link>
        <Link to="/experiencenew">Experience</Link>
        <Link to="/educationnew">Education</Link>
      </nav>
    </header>
  );
}
