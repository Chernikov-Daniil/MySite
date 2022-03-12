import "./header.scss";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { NavLink } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <nav className="header__menu menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "orange" : "" })}
            to="/"
            className="menu__link"
          >
            Home Page
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "orange" : "" })}
            to="/products"
            className="menu__link"
          >
            Products
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "orange" : "" })}
            to="/contacts"
            className="menu__link"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="basket">
      <ShoppingBagIcon />
    </div>
  </header>
);
