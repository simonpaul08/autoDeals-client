import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"
import { IoMdExit } from "react-icons/io";

const Header = () => {

  const { currentUser, logout } = useAuthContext();
  const navigate = useNavigate();

  const onClickTitle = () => {
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-logo">
          <h3 className="header-logo-title" onClick={onClickTitle}>AutoDeals</h3>
        </div>
        <nav className="header-nav">
          <Link to="contact-us" className="nav-item">Contact Us</Link>
        </nav>
        <div className="header-profile">
          {currentUser ?
            <div className="profile-wrapper">
              <p className="profile-name">{currentUser?.name}</p>
              <button className="logout-btn" onClick={logout}>Logout <IoMdExit size={20} className="logout-icon"/></button>
            </div>
            : <Link to="/login" className="login-btn">Login</Link>}
        </div>
      </div>
    </header>
  )
}

export default Header