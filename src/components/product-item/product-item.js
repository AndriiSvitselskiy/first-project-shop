import './product-item.css'
const ProductItem=({obj,purchasedItem})=>{
// const [product,setProduct]=useState("")
 const showProduct=()=>{
// console.log(obj)
purchasedItem(obj)
 }
  let object=obj
//  console.log(object)

 if(object.id){
    
    return(
<div className="productElement" >
    <div>
        <img src={process.env.PUBLIC_URL + 'img/'+object.id+`.jpg`} alt="icon"/>
    </div>
    <div>
        <h4>{object.model}</h4>
        <h3>Цiна: {object.price} $</h3>
        </div>
    <button className="parchaseButton"
    onClick={showProduct}>В кошик</button>
    
</div>
    ) 
 }else{
     return(
        <div className="sorry">
             <h1>Вибачте,на даний момент вiдсутнi товари в данiй категорiї</h1>
        </div>
     )
    
 }

 
}
export default ProductItem