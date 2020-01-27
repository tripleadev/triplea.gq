import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons"

import "./header.css"

const Header = () => {
  const [isMenuOpened, setMenuOpened] = useState(false)
  return (
    <header>
      <div className="wrapper">
        <button
          className="menuIcon"
          onClick={() => {
            setMenuOpened(isMenuOpened ? false : true)
            document.body.style.overflow = isMenuOpened ? "auto" : "hidden"
          }}
        >
          <div
            className={`bar ${
              isMenuOpened ? "bar--menu-opened" : "bar--menu-closed"
            }`}
          ></div>
        </button>
        <ul
          className={`list ${isMenuOpened ? "list--opened" : "list--closed"}`}
        >
          <li>
            <Link
              to="/"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              Products
            </Link>
          </li>
          <li className="icon">
            <Link
              to="/twitter"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </Link>
          </li>
          <li className="icon">
            <Link
              to="/facebook"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            </Link>
          </li>
          <li className="icon">
            <Link
              to="/instagram"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </li>
          <li className="icon">
            <Link
              to="/discord"
              onClick={() => {
                document.body.style.overflow = "auto"
              }}
            >
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
