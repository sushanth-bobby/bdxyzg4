import React from "react"

import { Link } from "gatsby"
import Seo from "./seo"
/*
function NotFoundPage() {
  return <div>
    <h4>error</h4>
    <h1>404</h1>
    <h4>i am totally embarrassed, but i think i can survive this.</h4>
    </div>
}
*/

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <div
      style={{
        width: `100vw`,
        height: `100vh`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <div>
        <h3>error</h3>
        <h1 style={{
          fontSize: `164px`
        }}>404</h1>
        <h2>i am totally embarrassed, but i think i can survive this.</h2>
        <p>
          {`Can you please, click `}{" "}
          <Link to="/" className="link-style">
            Home 
          </Link>
        </p>
      </div>
    </div>
  </>
)

export default NotFoundPage
