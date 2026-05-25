import TopBar from "./Topbar";
import Mainnav from "./Mainnav";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <TopBar />
      <Mainnav />
    </header>
  );
}