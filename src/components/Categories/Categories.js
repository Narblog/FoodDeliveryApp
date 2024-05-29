const Categories=({onFilter})=>{
    const categories=["All","Fruits","Pizza","Burger","Coffe","Drink"]
    return<>
    <ul className="horizontal">
    {
        categories.map((elm,i)=><li onClick={()=>onFilter(elm)} key={i}>{elm}</li>)
    }
    </ul>
  
    </>
}
export default Categories