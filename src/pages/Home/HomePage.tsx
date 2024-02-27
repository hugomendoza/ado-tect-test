import { useEffect } from 'react'
import { useAppSelector, useGetProducts } from '../../hooks'

import { Card } from '../../components'
import { Layout } from '../../layout/Layout'

import { Grid } from './HomePage.Styles'

export const HomePage = () => {
  const { products } = useAppSelector(state => state.ado)
  const { getProductsFromApi } = useGetProducts()

  useEffect(() => {
    getProductsFromApi()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <section>
        <div className="container">
          <Grid>
            {products.map(product => (
              <Card key={product.id} {...product} />
            ))}
          </Grid>
        </div>
      </section>
    </Layout>
  )
}
