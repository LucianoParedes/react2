import "./styles.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src={"./logo.png"} alt="logo" width={"100px"} />
      </Link>
      <div className="ListContainer">
        <NavLink
          to={`/category/procesadores`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Procesadores
        </NavLink>
        <NavLink
          to={`/category/mothers`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Mothers
        </NavLink>
        <NavLink
          to={`/category/placas de video`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}>
          Placas de video
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
