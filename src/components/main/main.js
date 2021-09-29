import React from "react"
import './main.css'
import ProductItem from '../product-item'
const Main=({list,products,addProducts,hide})=>{
  let array=products
  let elements=""
let className="divMain"
if(hide){
  className+=" hide"
 }
  const addProduct=(item)=>{
  addProducts(item)
  }

  if(array.length>0){
     
       elements=array.map(item=>{
          return(
            <ProductItem obj={item} key={item.id} purchasedItem={addProduct}/>
          )
      })
  }else{elements=""}
    return(
        <div className={className} key="1">
            <h1>{list}</h1>
            {elements}  
        </div>
    )
}
export default Main