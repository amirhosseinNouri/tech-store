import React from 'react'
import CartSection from '../components/cartPage'
import Hero from '../components/Hero'
import cartBcg from '../images/storeBcg.jpeg'
export default function CartPage() {
    return (
        <>
        <Hero img={cartBcg}></Hero>
        <CartSection></CartSection>
        </>
    )
}
