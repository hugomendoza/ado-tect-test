import { Layout } from "../../layout/Layout"

import { iMacPhoto } from "../../assets/img"

export const ProductPage = () => {
  return (
    <Layout>
      <section>
        <figure>
          <img src={iMacPhoto} alt="" />
        </figure>
      </section>

      <section>
        <div className="container">
          <h1>Product Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem sed quis voluptatum fuga perferendis ratione sequi, repellat excepturi magnam minus placeat dolorem quas dolor sapiente repudiandae maxime dicta porro.</p>
        </div>
      </section>
    </Layout>

  )
}