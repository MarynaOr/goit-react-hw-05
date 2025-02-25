// import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
// import HomePage from "../../pages/HomePage";

// const buildLinkClass = ({ isActive }) =>{
//   return clsx(s.link, isActive && s.active)
// }
const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        <NavLink className={s.link} to="/movies">
          Movies
        </NavLink>
      </nav>
   
      
    </>
  );
};

export default Navigation;
