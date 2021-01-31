import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'

export default function Services() {
    const {serviceData} = useSelector(state => state.homePage)
    return (
        <div>
            Services
        </div>
    )
}

