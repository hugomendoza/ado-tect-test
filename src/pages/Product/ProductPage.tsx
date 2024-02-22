import { useEffect } from "react"
import { useGetProductById } from "../../hooks"

import { Layout } from "../../layout/Layout"

import { iMacPhoto } from "../../assets/img"
import {
  StyledBanner,
  StyledDescription,
  StyledLabel,
  StyledTitle,
  WrapperLabels
} from "./ProductPage.styles"

export const ProductPage = () => {

  const { getProduct, idProduct, product} = useGetProductById()
  const { name, data } = product
  
  const price = data?.price || null 
  const generation = data?.generation || null
  const Capacity = data?.Capacity || null
  const color = data?.color || null

  useEffect(() => {
    getProduct(idProduct!)
  }, [idProduct])

  return (
    <Layout>
      <section>
        <StyledBanner>
          <img src={iMacPhoto} alt="" />
        </StyledBanner>
      </section>

      <section>
        <div className="container">
          <StyledTitle>
            {name}
          </StyledTitle>
          
          <StyledDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem sed quis voluptatum fuga perferendis ratione sequi, repellat excepturi magnam minus placeat dolorem quas dolor sapiente repudiandae maxime dicta porro.
          </StyledDescription>
          
          <WrapperLabels>
            {price !== null && <StyledLabel>$ {price}</StyledLabel>}
            {generation !== null && <StyledLabel>{generation}</StyledLabel>}
            {Capacity !== null && <StyledLabel>{Capacity}</StyledLabel>}
            {color !== null && <StyledLabel>{color}</StyledLabel>}
          </WrapperLabels>

        </div>
      </section>
    </Layout>

  )
}