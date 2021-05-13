import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Navbar from '../components/navbar'
import MainProduct from '../components/main-product'
import ProductsList from '../components/products-list'
import { IProduct } from '../shared/models/product'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import ShoppingCart from '../components/shopping-cart'
import { getProducts } from '../utils/products'

const Home: React.FC<AppProps> = (props): JSX.Element => {
  const { products } = props;
  return (
    <>
      <Head>
        <title>Bejamas App</title>
      </Head>
      <Navbar />
      <ShoppingCart />
      <Container>
        <MainProduct {
          ...products.find(
              (product: IProduct.IProps) => product.featured == true)
            } />
        <ProductsList {...props} />
      </Container>
    </>
  )
}

export async function getStaticProps() {

  const data = await getProducts();

  return {
    props: {
      products: data
    },
    revalidate: 10
  }
}

export default Home
