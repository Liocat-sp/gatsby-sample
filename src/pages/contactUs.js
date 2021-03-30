import React from "react"
import "../styles/contect.scss"
import Layout from "../Components/Layout/Layout";

const contactUs = () => {
  return (
    <Layout>
      <div className="contact-main">
        <div className="contact-text">
          Welocome to Our Blog Site,Keep Visiting For Latest Updates.
          <br />
          Thanks For your Support.
        </div>
        <div className="content-style-1">
          <div className="custom-style">
            <div className="back"></div>
          </div>
        </div>
        <div className="content-style-2">
          <div className="custom-style">
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contactUs
