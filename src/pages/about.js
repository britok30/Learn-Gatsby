import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I am a frontend developer who specializes in React</p>
      <p>
        Contact me over <Link to="/contact">here</Link>
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage
