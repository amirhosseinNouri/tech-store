import React from 'react'
import Info from '../components/aboutPage/Info'
import Hero from '../components/Hero'
import aboutBcg from '../images/aboutBcg.jpeg'

export default function About() {
    return (
        <>
        <Hero img={aboutBcg}></Hero>
        <Info></Info>
        </>
    )
}
