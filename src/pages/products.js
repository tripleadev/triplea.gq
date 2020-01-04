import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Product from "../components/Product"

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  max-width: 1500px;
  margin-bottom: 100px;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  @media (max-width: 1300px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`

const Heading = styled.h1`
  font-weight: 200;
  font-size: 2.5em;
  margin: 1em;
`

const ProductsPage = () => (
  <Layout>
    <SEO title="Products" />
    <Wrapper>
      <Heading>Our products.</Heading>
      <Products>
        <Product
          logo="https://scontent.fpoz2-1.fna.fbcdn.net/v/t1.0-9/24993109_1540782062664350_5514175476555756073_n.jpg?_nc_cat=111&_nc_ohc=OurO4jCGKsUAQkEM9G9lNUlgTth2Kl_UgZTzw88Co1SxbxBETVW7iaQBg&_nc_ht=scontent.fpoz2-1.fna&oh=5eb372f208c850f755207044d4da2441&oe=5EA0D682"
          name="a.js"
          page="a.js"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          imperdiet fermentum lacus, eget consectetur metus elementum non.
          Aliquam maximus massa sit amet est tincidunt, at malesuada sapien
          auctor. Nulla ut placerat quam, id dignissim ante.
        </Product>
        <Product
          logo="https://scontent.fpoz2-1.fna.fbcdn.net/v/t1.0-9/24993109_1540782062664350_5514175476555756073_n.jpg?_nc_cat=111&_nc_ohc=OurO4jCGKsUAQkEM9G9lNUlgTth2Kl_UgZTzw88Co1SxbxBETVW7iaQBg&_nc_ht=scontent.fpoz2-1.fna&oh=5eb372f208c850f755207044d4da2441&oe=5EA0D682"
          name="pride.js"
          page="pride.js"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          imperdiet fermentum lacus, eget consectetur metus elementum non.
          Aliquam maximus massa sit amet est tincidunt, at malesuada sapien
          auctor. Nulla ut placerat quam, id dignissim ante.
        </Product>
        <Product
          logo="https://scontent.fpoz2-1.fna.fbcdn.net/v/t1.0-9/24993109_1540782062664350_5514175476555756073_n.jpg?_nc_cat=111&_nc_ohc=OurO4jCGKsUAQkEM9G9lNUlgTth2Kl_UgZTzw88Co1SxbxBETVW7iaQBg&_nc_ht=scontent.fpoz2-1.fna&oh=5eb372f208c850f755207044d4da2441&oe=5EA0D682"
          name="EZDash"
          page="ezdash"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          imperdiet fermentum lacus, eget consectetur metus elementum non.
          Aliquam maximus massa sit amet est tincidunt, at malesuada sapien
          auctor. Nulla ut placerat quam, id dignissim ante.
        </Product>
        <Product
          logo="https://scontent.fpoz2-1.fna.fbcdn.net/v/t1.0-9/24993109_1540782062664350_5514175476555756073_n.jpg?_nc_cat=111&_nc_ohc=OurO4jCGKsUAQkEM9G9lNUlgTth2Kl_UgZTzw88Co1SxbxBETVW7iaQBg&_nc_ht=scontent.fpoz2-1.fna&oh=5eb372f208c850f755207044d4da2441&oe=5EA0D682"
          name="a.js"
          page="a.js"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          imperdiet fermentum lacus, eget consectetur metus elementum non.
          Aliquam maximus massa sit amet est tincidunt, at malesuada sapien
          auctor. Nulla ut placerat quam, id dignissim ante.
        </Product>
      </Products>
    </Wrapper>
  </Layout>
)

export default ProductsPage
