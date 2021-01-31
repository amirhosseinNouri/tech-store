import React from 'react'
import Title from '../Title'
import styled from 'styled-components'

export default function Contact() {
    return (
        <Wrapper>
            <Title title="Contact Us"></Title>
            <form>
                <input type="text" name="name" placeholder="John smith" />
                <input type="email" name="email" placeholder="email@email.com" />
                <input type="email" name="subject" placeholder="importante!!!" />
                <textarea name="message" rows="10" placeholder="Hello" ></textarea>
            </form>
        </Wrapper>
    )
}
const Wrapper = styled.section `

`
