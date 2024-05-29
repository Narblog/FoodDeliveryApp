import photo from "../../food.jpeg"
import Categories from "../Categories/Categories"
const Header=({onFilter})=>{
    return<>
    <img className="main-pic" src={photo} alt="PictureFood"/>
    <Categories onFilter={onFilter}/>
    </>
}
export default Header