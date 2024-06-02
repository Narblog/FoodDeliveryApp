const ProductItem=({product,onMove})=>{
    return(
        <div className="product-item">
            <img alt="Photo1"src={require("../../"+product.photo)} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button onClick={()=>onMove(product)}>Order</button>
        </div>
    )
  
}
export default ProductItem