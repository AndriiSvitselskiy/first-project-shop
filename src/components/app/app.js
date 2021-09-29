import React  from "react";
import Header from '../header'
import TopicList from "../topic-list";
import Main from '../main'
import Basket from '../basket'
import './app.css'
import { useState } from "react";
import allProducts from './info.json'
let itemsArray=[]

const App=(props)=>{
const [SelectedGroup,setSelectedGroup]=useState("")
const [showProducts,setShowProducts]=useState("")
const [selectedProducts,setSelectedProducts]=useState("")
const [hide,setHide]=useState(false)
const [purchased,setPurchased]=useState(0)
const hideAll=()=>{
  setHide(true)
  setBasket(false)
 }
const [basket,setBasket]=useState(true)

 const choseCategory=(category)=>{
  setHide(false)
  setBasket(true)
      setSelectedGroup(category)
      allProducts.list.forEach(function(item){
    if(item.category===category){
              setShowProducts(item.list)
      }
   })
 }

 const [productList,setproductList]=useState(itemsArray)
 const addProductToArray=(object)=>{
    setSelectedProducts(object)
    itemsArray.push(object)
    setproductList(itemsArray)
    setPurchased(purchased+1)  
 }
 const clearList=()=>{
        itemsArray=[]
        setproductList(itemsArray)
        setPurchased(0)
 }
          return(
        <div>
          <Header products={selectedProducts} 
                  itemsArray={productList}
                  purchased={purchased}
                  hideAll={hideAll}/>
          <TopicList list={allProducts.list} 
                     selected={(category)=>choseCategory(category)}/>
          <Main list={SelectedGroup}
                products={showProducts}
                addProducts={addProductToArray}
                hide={hide}/>
          <Basket style={basket}
                  itemsArray={productList}
                  clearList={clearList}/>
        </div>
    )
}
export default App