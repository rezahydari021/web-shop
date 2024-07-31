import React, { useEffect, useState } from 'react'
import Homepage from './component/homepage/Homepage'
import DeatilsCard from './component/deatilsCard'
import Product from './component/product'
import Layout from './component/layout'
import { BrowserRouter, Form, Route, Routes, useActionData, useParams } from 'react-router-dom'
import ProductContext from './component/context/productContext'
import Froms from './component/forms'
import MyCart from './component/myCart'
export default function App() {

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories')
      .then(res => res.json())
      .then(json => setCategory(json));
      
  }, []);
  const [category, setCategory] = useState([])
  const [addCart, setAddCart] = useState({
    arrayCart: [],
    Counter: [],
    total: 0,
    totalprice:0
  })
  const [name, setName] = useState(false)
  const [hasActiveLogin, setHasActiveLogin] = useState(true)
  return (
    <div>
      <ProductContext.Provider value={{ products, setProducts }}>
        <BrowserRouter>
          {
            hasActiveLogin ?
              <Layout category={category} addCart={addCart} setname={setName} name={name} setHasActiveLogin={setHasActiveLogin}>
                <Routes>
                  <Route path='/' element={<Homepage category={category} />} />
                  <Route path='/products/:id' element={<Product category={category} />} />
                  <Route path='/product/:id' element={<DeatilsCard setAddCart={setAddCart} addCart={addCart} />} />
                  <Route path='/mycart' element={<MyCart setAddCart={setAddCart} addCart={addCart}/>} />
                </Routes>
              </Layout>
              :
              <Routes>
              
              {/* It is not responsive */}
                <Route path='/login' element={<Froms setName={setName} setHasActiveLogin={setHasActiveLogin} />} />
              </Routes>

          }
        </BrowserRouter>
      </ProductContext.Provider>
    </div>

  )
}
