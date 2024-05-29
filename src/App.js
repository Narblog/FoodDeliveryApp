import {DUMMY_PRODUCTS} from "./DummyProducts"
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import { useState,useMemo } from "react";

const filterProduct=(category)=>{
  if(category==="All"){
    return DUMMY_PRODUCTS
  }
  else{
    return DUMMY_PRODUCTS.filter(elm=>elm.category===category)
  }
}

function App() {
  const [filterText,setFilterText]=useState("All")
  const products=useMemo(()=>filterProduct(filterText),[filterText])
  return (
    <div className="App">
   <Header onFilter={(text)=>setFilterText(text)}/>
   <div className='flex'>
    <ProductList products={products}/>
    
   </div>
    </div>
  );
}

export default App;
