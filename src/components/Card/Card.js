import CardItem from "../CardItem/CardItem"

const Card=({items,total,onQuantityUp,onQuantityDown,onDelete})=>{
    return<div>
        <p className="total">Total-{total}AMD</p>
    {
        items.map(elm=>{
            return <CardItem key={elm.id} item={elm} onUp={onQuantityUp}
            onDown={onQuantityDown} onDelete={onDelete}/>
        })
    }
    </div>
}
export default Card