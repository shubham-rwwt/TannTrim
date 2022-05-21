import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import ProductDetail from './pages/productDetails/ProductDetail'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
