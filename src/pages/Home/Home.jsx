import React from 'react'
import Nav_index from '../../shared/Nav/Nav_index'
import Land from '../../components/Swiper/Land'
import Techs from '../../components/techs/Techs'
import Deduct from '../../components/deduct/Deduct'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <>
    <Nav_index/>
    <Land/>
    <Techs/>
    <Deduct/>
    <Products/>
    </>
  )
}

export default Home