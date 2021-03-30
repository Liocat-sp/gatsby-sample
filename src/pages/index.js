import React from "react"
import "../styles/index.scss";
import {Link} from "gatsby";
import Layout from "../Components/Layout/Layout"

import "../styles/home.scss"
export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content-main">
          <div className="hero-content">
            <h1 className="title">Best Articls from the <br/> From Best Writers !!!</h1>
            <p>See all new articals from and know what is happening in tech industry.<br />
                from trusted sources and people's.</p>
            <div className="hero-button"> 
            <Link to="/blogs">
              Go To Blogs
            </Link>
            </div>
          </div>
        </div>
        <div className="hero-style">
          <div className="custom-style">
            <div className="back"></div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
