import React from "react"
import sectionStyles from "./Section2.module.css"

const Section2 = ({ data }) => {
  console.log("yyyyyyyyyyyyyyy", data)
  return (
    <section>
      <div className={sectionStyles.sectionContainer}>
        <h1>{data.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
    </section>
  )
}

export default Section2
