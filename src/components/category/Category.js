import React from 'react'
import './Category.css'
import AllBags from '../../icons/AllBags.svg'
import VanityPouch from '../../icons/VanityPouch.svg'
import ToteBag from '../../icons/ToteBag.svg'
import DuffleBag from '../../icons/DuffleBag.svg'
import LaptopSleeve from '../../icons/LaptopSleeve.svg'
import messengerBags from '../../icons/messengerBags.svg'
import slingBags from '../../icons/slingBags.svg'
import Handbag from '../../icons/Handbag.svg'

const Category = () => {
  return (
    <main className="category_container">
      <div className="category">
        <div className="AllBags">
          <img src={AllBags} alt="" />
          <p>All Bags</p>
        </div>
        <div className="AllBags">
          <img src={VanityPouch} alt="" />
          <p>Vanity Pouch</p>
        </div>
        <div className="AllBags">
          <img src={ToteBag} alt="" />
          <p>Tote Bags</p>
        </div>
        <div className="AllBags">
          <img src={DuffleBag} alt="" />
          <p>Duffle Bags</p>
        </div>
        <div className="AllBags">
          <img src={LaptopSleeve} alt="" />
          <p>Laptop Sleeve</p>
        </div>
        <div className="AllBags">
          <img src={messengerBags} alt="" />
          <p>messenger Bags</p>
        </div>
        <div className="AllBags">
          <img src={slingBags} alt="" />
          <p>Sling Bags</p>
        </div>
        <div className="AllBags">
          <img src={Handbag} alt="" />
          <p>Handbags</p>
        </div>
      </div>
    </main>
  )
}
export default Category
