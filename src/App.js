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
  const [card,setCard]=useState([])
  const [filterText,setFilterText]=useState("All")
  const products=useMemo(()=>filterProduct(filterText),[filterText])

  const calculateTotal=(card)=>{
    return card.reduce((counter,item)=>counter+item.price*item.quantity,0)
  }
  const total=useMemo(()=>calculateTotal(card),[card])
  const movetoCard=(product)=>{
    if(!card.includes(product)){
      product.quantity=1
      card.push(product)
    }else{
      product.quantity++
    }
    setCard([...card])

  }
  const quantityUp=(product)=>{
    product.quantity++
    setCard([...card])

  }
  const quantityDown=(product)=>{
    product.quantity--
    if(product.quantity===0){
      card.splice(card.indexOf(product),1)
    }
    setCard([...card])
    
  }
  const removeFromCard=(product)=>{
    card.splice(card.indexOf(product),1)
    setCard([...card])

  }
  return (
    <div className="App">
   <Header onFilter={(text)=>setFilterText(text)}/>
   <div className='flex'>
    <ProductList products={products} onMove={movetoCard}/>
    <Card 
        items={card}
        total={total}
        onQuantityUp={quantityUp}
        onQuantityDown={quantityDown}
        onDelete={removeFromCard}
        
        />
    
   </div>
    </div>
  );
}

export default App;
