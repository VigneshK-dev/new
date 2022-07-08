import React from 'react'

function ProductCard({ img, title }) {


    return (
        <div>

            <img src={img} style={{width:"70%",height:"70%"}} alt="products" />

            <div>
                <h4>{title}</h4>
            </div>


        </div>
    )
}

export default ProductCard