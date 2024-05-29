import ProductItem from "../ProductItem/ProductItem"

const ProductList=({products})=>{
    return(
        <div className="flex">
            {
                products.map(elm=>{
                    return <ProductItem
                    key={elm.id}
                    product={elm}/>
                })
            }

        </div>
    )
}
export default ProductList