import React from 'react'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import Header from '../components/Header/Header'
import Headerbelowbar from '../components/Headerbelowbar/Headerbelowbar'

const Home = () => {
    return (
        <>
           <Header />
           <Headerbelowbar />
           <Carousel />
           <Banner /> 
        </>
    )
}

export default Home
