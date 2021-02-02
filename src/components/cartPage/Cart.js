import React from 'react'
import Title from '../Title'
import Hero from '../Hero'
import CartColumns from './CartColumns'
import CartList from './CartList'
import CartTotal from './CartTotal'


export default function Cart() {
    return (
        <>
        <CartColumns></CartColumns>
        <CartList></CartList>
        <CartTotal></CartTotal>
        </>
    )
}
