import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const fetchData = async () => {
    await axios
      .get(
        `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`,
      )
      .then((res) => {
        // console.log(res.data.data.products)

        let singleProduct = res.data.data.products.find((prd) => prd.id === id)
        console.log('sdfgeasdjfhgueirjtygefjhdsb')
        console.log(id)
        console.log(singleProduct)
      })

    // console.log(id)
  }

  useEffect(() => {
    // fetchData().then((result) => {
    //   let singleProduct = result.data.products.find((prd) =>
    //     console.log(prd.id === id),
    //   )
    //   setProduct(singleProduct)
    // })
    fetchData()
  }, [])

  //   console.log(product)

  return (
    <>
      <div></div>
      {/* <div>{product.name}</div> */}
    </>
  )
}

export default ProductDetail
