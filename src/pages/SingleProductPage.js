import React from 'react'
import {useParams} from 'react-router-dom'

export default function SingleProductPage() {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            Single product
        </div>
    )
}
