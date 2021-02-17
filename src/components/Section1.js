import React from "react"
import sectionStyles from "./Section1.module.css"
import Copyable from "./Copyable.js"

const Section1 = ({ data }) => {
  console.log("yyyyyyyyyyyyyyy", data)
  return (
    <section>
      <div className={sectionStyles.sectionContainer}>
        <h1>{data.frontmatter.title}</h1>
        <p>{data.frontmatter.beforeCode}</p>
        <Copyable text={data.html} />
        <p>{data.frontmatter.afterCode}</p>
      </div>
    </section>
  )
}

export default Section1
