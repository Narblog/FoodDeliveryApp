const CardItem=({item,onUp,onDown,onDelete})=>{

    return<div className="card-item">
    <p className="title">{item.name}</p>
    <p>quantity-{item.quantity}</p>
    <p className="subtotal">subtotal-{item.price*item.quantity}AMD</p>
    <button onClick={()=>onUp(item)}>+</button>
    <button onClick={()=>onDown(item)}>-</button>
    <button onClick={()=>onDelete(item)} className="del-btn">Delete</button>
    </div>
}
export default CardItem