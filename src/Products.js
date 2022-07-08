import React, { useState } from 'react'
import { useEffect } from 'react';
import ProductCard from './ProductCard';
import axios from "axios";


function Products() {

    //all products is stored here
    const [data,setdata] = useState([])

 
    
 let skip = 0

 //api call 
const Getproducts = ()=>{
     axios.get(`https://dummyjson.com/products?skip=${skip}`).then(response => {
            if (response.status === 200) {
                 // console.log(response.data.products)
               setdata(response.data.products)
            }
        }).catch(error => {
            console.log(error)
        })

}



    const handleScroll = () => {
        //gives the height of the window 
        let windowheight = window.innerHeight
        //  console.log(height)

        //gives the scrollheight 
        let scrollheight = window.scrollY
        //  console.log(scrollheight)

        //height of entire window 
        var totalheight = document.documentElement.offsetHeight
        // console.log(totalheight)

        //if the height of the current window and the scrollheight
        // is greater than the total window height ,
        if ((windowheight + scrollheight + 2) >= totalheight) {
            console.log("reached bottom of screen")
            skip += 5
            Getproducts(skip)
        }
    
    }
 
   
    useEffect(() => {
        Getproducts()
        window.addEventListener('scroll', handleScroll)
    }, [])



    return (
        <div>

            <div className='display'>
                {data.map(ele => (
                    <ProductCard key={ele.id} id={ele.id} img={ele.images[0]} title={ele.title} />
                ))}

            </div>

        </div>



    )
}

export default Products