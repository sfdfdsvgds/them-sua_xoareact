import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ProductTypes } from './types/product'
import {Routes, Route} from 'react-router-dom'
import ProductManager from './ProductManager'
import axios from 'axios'
import ProductAdd from './ProductAdd'

function App() {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  useEffect(()=> {
    const getProduct = async ()=>{
      const {data} = await axios.get('http://localhost:3001/products');
      setProducts(data);
    }
    getProduct();
  },([]))

  const xoa = (id: number)=>{
    axios.delete('http://localhost:3001/products/' +id);
    setProducts(products.filter(i => i.id !== id));
  }

  const add = async (product: ProductTypes)=>{
    const {data} = await axios.post('http://localhost:3001/products', product);
    setProducts([...products, data])
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Home Pages</h1>} />
        <Route path='products' element={<ProductManager products={products} onXoa={xoa}/>} />
        <Route path='products/add' element={<ProductAdd onAdd={add} />} />
      </Routes>
    </div>
  )
}

export default App
