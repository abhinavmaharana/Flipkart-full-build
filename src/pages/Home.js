import React from 'react'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import DisplayContainer from '../components/DisplayContainer/DisplayContainer'
import DisplayFootwear from '../components/DisplayFootwear/DisplayFootwear'
import DisplayList from '../components/DisplayList/DisplayList'
import DisplayProduct from '../components/DisplayProduct/DisplayProduct'
import Header from '../components/Header/Header'
import Headerbelowbar from '../components/Headerbelowbar/Headerbelowbar'

const Home = () => {
    return (
        <>
           <Header />
           <Headerbelowbar />
           <Carousel />
           <Banner /> 
           <DisplayProduct />
           <DisplayContainer />
           <DisplayList />
           <DisplayFootwear />
        </>
    )
}

export default Home
