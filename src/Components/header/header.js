import React from "react"
import { Link } from "gatsby";
import "./header.scss";

const header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="brand">
          <h1>Gatsby</h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contactUs">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default header
