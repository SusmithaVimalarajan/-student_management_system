
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar({ variant = "public", username, onLogout }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">

                <Link to="/" className="logo">
                    <img
                        src="https://ucj.ac.lk/wp-content/uploads/2024/08/UCJ-logo.jpg"
                        alt="University College of Jaffna Logo"
                        className="university-logo"
                    />
                </Link>

                {variant === "public" && (
                    <div className="nav-links">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>

                        <Link to="/login" className="login-button">
                            Login
                        </Link>
                    </div>
                )}

                {variant === "admin" && (
                    <div className="nav-links">
                        <div className="navbar-user">
                            <strong>{username}</strong>
                            <span className="role-badge">ADMINISTRATOR</span>
                        </div>

                        <button
                            type="button"
                            className="logout-button"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}

                {variant === "student" && (
                    <div className="nav-links">
                        <div className="navbar-user">
                            <strong>{username}</strong>
                            <span className="role-badge">STUDENT</span>
                        </div>

                        <button
                            type="button"
                            className="logout-button"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;
