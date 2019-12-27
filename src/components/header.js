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
      <ul className={`list ${isMenuOpened ? "list--opened" : "list--closed"}`}>
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
          <a href="http://triplea.gq/twitter">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </li>
        <li className="icon">
          <a href="http://triplea.gq/facebook">
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
          </a>
        </li>
        <li className="icon">
          <a href="http://triplea.gq/instagram">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li className="icon">
          <a href="http://triplea.gq/discord">
            <FontAwesomeIcon icon={faDiscord} size="lg" />
          </a>
        </li>
      </ul>
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
