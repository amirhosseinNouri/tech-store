import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

export default function Footer() {
    const {socialData} = useSelector(state => state.homePage)
    return (
        <Wrapper>
            <div className="footer__title">
                <p className="text-capitalize">
                    copyright &copy; tech store {new Date().getFullYear()}. all rights reserved
                </p>
            </div>
            <div className="footer__icons">
                {socialData.map((item) =>{
                    return <a key={item.id} href={item.url}>{item.icon}</a>
                })}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.footer`
    
`
