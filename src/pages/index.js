import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Im Kelvin, a frontend developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
