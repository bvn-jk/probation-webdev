import { Link } from "react-router-dom";

function NavbarP() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">
        <Link to="/Logout" className="logout-link">
          Logout
        </Link>
      </span>
      <span className="navbar-brand">
        <Link to="/ChangePass" className="nav-link">
          Ganti Password
        </Link>
      </span>
      <span className="navbar-brand">
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
      </span>
      <span className="navbar-brand">
        <Link to="/PilihSchedule" className="nav-link">
          Pemilihan Jadwal
        </Link>
      </span>
    </nav>
  );
}

export default NavbarP;
