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
  // console.log(product.id)

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
          <p>{product.name}</p>
          <div className="price">
            <p className="special_price">Rs {product.special_price}.00</p>
            {product.price === product.special_price ? (
              <p></p>
            ) : (
              <p className="exactprice">Rs {product.price}</p>
            )}
            {product.inr_discount === 0 ? (
              <p></p>
            ) : (
              <p className="inr_discount"> ({product.inr_discount}% off)</p>
            )}
          </div>

          <div className="sizeChart">
            <p>SIZE CHART</p>
          </div>

          <div className="chart">
            <div>
              <p>{product.sizes[0] === '' ? <p>NAN</p> : product.sizes[0]}</p>
            </div>
            <div>
              <p>{product.sizes[1] === '' ? <p>NAN</p> : product.sizes[1]}</p>
            </div>
            <div>
              <p>{product.sizes[2] === '' ? <p>NAN</p> : product.sizes[2]}</p>
            </div>
            <div>
              <p>{product.sizes[3] === '' ? <p>NAN</p> : product.sizes[3]}</p>
            </div>
            <div>
              <p>{product.sizes[4] === '' ? <p>NAN</p> : product.sizes[4]}</p>
            </div>
            <div>
              <p>{product.sizes[5] === '' ? <p>NAN</p> : product.sizes[5]}</p>
            </div>
            <div>
              <p>{product.sizes[6] === '' ? <p>NAN</p> : product.sizes[6]}</p>
            </div>
          </div>

          <button className="addToBag">Add to Bag</button>
        </div>
      </div>

      {/* <div className="reviews">{product.reviews[0]}</div> */}
    </main>
  )
}

export default ProductDetail
