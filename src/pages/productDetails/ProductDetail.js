import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import './ProductDetail.css'

const ProductDetail = () => {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const fetchSingleProduct = async () => {
    await axios
      .get(
        `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`,
      )
      .then((res) => {
        let singleProduct = res.data.data.products.find(
          (prd) => prd.id.toString() === id.toString(),
        )
        // console.log(id)
        setProduct(singleProduct)
      })
  }
  console.log(product.id)

  useEffect(() => {
    fetchSingleProduct()
  }, [])

  return (
    <main>
      <Header />
      {/* {product.id} */}
      <div className="singleProd">
        <div className="singleProdImg">
          <div className="mainImg">
            <img src={product.image[0]} alt="mainImg" />
          </div>
          <div className="singleProdsubImg">
            <img src={product.image[1]} alt="singleProdsubImg" />
            <img src={product.image[2]} alt="singleProdsubImg" />
            <img src={product.image[3]} alt="singleProdsubImg" />
          </div>
        </div>

        <div className="singleProdInfo">
          <h3>{product.name}</h3>
        </div>
      </div>
    </main>
  )
}

export default ProductDetail
