import React from "react"
import './main.css'
import ProductItem from '../product-item'
const Main=({list,products,addProducts,hide,search,searchArray})=>{
  let array=products
  let elements=""
  let className="divMain"
  let topic
  
if(hide){
  className+=" hide"
 }
 if(search!==""){
   topic="Результати пошуку"
  console.log(searchArray)
const addProduct=(item)=>{
  addProducts(item)
  }

  if(searchArray.length>0){
     let index=0
       elements=searchArray.map(item=>{
         index+=1
          return(
            <ProductItem obj={item} key={item.id+index} purchasedItem={addProduct}/>
          )
      })
  }
 }
 else{
  const addProduct=(item)=>{
  addProducts(item)
  }

  if(array.length>0){
    topic=list
     let index=0
       elements=array.map(item=>{
         index+=1
          return(
            <ProductItem obj={item} key={item.id+index} purchasedItem={addProduct}/>
          )
      })
  }
  else{elements=""}}
 
    return(
        <div className={className}>
            <h1>{topic}</h1>
            {elements}  
        </div>
    )
}
export default Main