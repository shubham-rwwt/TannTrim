import React from 'react'
import './Header.css'
import search from '../../icons/search.svg'
import user from '../../icons/user-alt.svg'
import bookmark from '../../icons/Bookmark.svg'
import shoppingBag from '../../icons/shopping-bag.svg'

const Header = () => {
  return (
    <main className="H_container">
      <div className="H">
        <h2 className="brand"> TANN TRIM</h2>
        <div className="H_icons">
          <div className="search">
            <img src={search} alt="" />
          </div>

          <div className="user-alt">
            <img src={user} alt="" />
          </div>
          <div className="bookmark">
            <img src={bookmark} alt="" />
          </div>

          <div className="shoppingBag">
            <img src={shoppingBag} alt="" />
          </div>
        </div>
      </div>
      <div className="H_menu">
        <div>
          <li>Bags</li>
          <li>Travel</li>
          <li>Accesories</li>
          <li>Gifting</li>
          <li>Jewelery</li>
        </div>
      </div>
    </main>
  )
}

export default Header
