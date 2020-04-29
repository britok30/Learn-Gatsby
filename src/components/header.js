import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <Link to="/index">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>

      <h1>Welcome to my World</h1>
    </div>
  )
}

export default Header
