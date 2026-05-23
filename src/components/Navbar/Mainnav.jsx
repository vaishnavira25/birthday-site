import "./navbar.css";
import logo from "../../assets/logo.jpg";


export default function MainNav() {
  return (
    <div className="mainnav">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Search */}
      <div className="search-box">
        <input type="text" placeholder="Search services..." />
      </div>

      {/* Menu */}
      <ul className="menu">
        <li>Home</li>
        <li>Games & Activity</li>
        <li>Themes</li>
        <li>Services</li>
        <li>Contact Us</li>
        <li>Explore</li>
      </ul>

      {/* Button */}
      {/* <button className="contact-btn">Contact</button> */}
    </div>
  );
}