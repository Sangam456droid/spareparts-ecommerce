import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../services/auth";
import { setUser } from "../store/userSlice";

const Header = () => {
  const [isLoginTriggered, setIsLoginTriggered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const triggerLogin = () => {
    setIsLoginTriggered(!isLoginTriggered);
  };

  const { user } = useSelector((state) => state.user);

  return (
    <header>
      {/* Header Top section */}
      <div className="header-top d-flex align-items-center justify-content-between">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="navbar-brand">
          <img src="/images/loo.png" alt="SpareParts.com" style={{ height: '50px', width: '100px' }} /> {/* Adjust style as needed */}
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            className="form-control"
            style={{ width: "400px" }}
            placeholder="Search products..."
          />
        </div>

        {/* User Links */}

        <div className="user-links">
          {!user && (
            <button
              to=""
              className="mr-3 position-relative btn-login bg-none"
              onClick={triggerLogin}
            >
              <FiUser size="1.3em" />
              Login / Signup
            </button>
          )}
          {isLoginTriggered && <Login trigger={triggerLogin} />}
          <Link to="/cart">
            <BiCart size="1.5em" /> Cart
          </Link>

          {user && (
            <>
              <Link to="/user-profile" className="btn btn-secondary">
                Manage Profile
              </Link>
              <button
                onClick={async () => {
                  navigate('/')
                  await signOut();
                  dispatch(setUser(null));
                }}
              >
                Log out
              </button>
            </>
          )}
        </div>
      </div>
     {/* Navigation Menu */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* Navigation links */}
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/helmets">
                  Helmets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/riding-gears">
                  Riding Gears
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/accessories">
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/parts">
                  Auto Parts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/categories/tyres">
                  Tyres
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              {/* Additional links */}
              <li className="nav-item">
                <Link className="nav-link" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
