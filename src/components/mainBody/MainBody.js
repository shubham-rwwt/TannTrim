import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import addToCart from '../../icons/addToCart.svg'
import productBookmark from '../../icons/productBookmark.svg'
import './MainBody.css'

const MainBody = () => {
  const [product, setProduct] = useState([])

  const fetchData = async () => {
    return await axios
      .get(
        `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`,
      )
      .then((res) => res.data)
  }

  useEffect(() => {
    fetchData().then((result) => setProduct(result.data.products))
  }, [])

  return (
    <main className="mainBody_container">
      <div className="mainBody_fchild">
        <div></div>
        <p>products</p>
      </div>
      <div className="products">
        {product &&
          product.map((c) => (
            <div className="card" key={c.id}>
              <Link to={`/productDetail/${c.id}`}>
                {console.log(c.id)}
                <div>
                  <div className="images">
                    <img
                      src={productBookmark}
                      alt="productBookmark"
                      className="productBookmark"
                    />

                    <img
                      src={c.plpimaage}
                      alt="productImg"
                      className="productImg"
                    />
                  </div>
                  <p className="name">{c.name.slice(0, 35)}...</p>
                  <div className="productInfo">
                    <div className="price">
                      <p className="special_price">Rs {c.special_price}.00</p>
                      {c.price === c.special_price ? (
                        <p></p>
                      ) : (
                        <p className="exactprice">Rs {c.price}</p>
                      )}
                      {c.inr_discount === 0 ? (
                        <p></p>
                      ) : (
                        <p className="inr_discount"> ({c.inr_discount}% off)</p>
                      )}
                    </div>
                    <img className="addToCart" src={addToCart} alt="cart" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </main>
  )
}
export default MainBody
