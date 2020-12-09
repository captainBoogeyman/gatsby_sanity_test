import * as React from "react"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import "./style.css"

export const query = graphql`

query MyQuery {
  allSanityPortfolio {
    edges {
      node {
        title
        slug
        description
        name
        image {
          asset {
            fluid{
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}


`;


// markup
const IndexPage = ({ data }) => {
  return (

    <div>
      {data.allSanityPortfolio.edges.map(({ node: Portfolio }) => (
        <div>
          <h1>{Portfolio.title}</h1>
          <h3>{Portfolio.name}</h3>
          <Image className="image" fluid={Portfolio.image.asset.fluid} alt="image" />
          <p>{Portfolio.description}</p>
        </div>
      ))}
    </div>
  )

}

export default IndexPage;
