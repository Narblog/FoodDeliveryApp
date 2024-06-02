import ProductItem from "../ProductItem/ProductItem"

const ProductList=({products,onMove})=>{
    return(
        <div className="flex">
            {
                products.map(elm=>{
                    return <ProductItem
                    key={elm.id}
                    product={elm}
                    onMove={onMove}/>
                })
            }

        </div>
    )
}
export default ProductList