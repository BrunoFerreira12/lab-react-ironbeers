import logo from "../assets/home-logo.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "blue", padding: "4%" }}>
      <NavLink to="/">
        <img src={logo} alt="home" className="logo" width={"8%"} />
      </NavLink>
    </div>
  );
}

export default NavBar;