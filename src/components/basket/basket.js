import './basket.css'
const Basket=({style,itemsArray,clearList})=>{
    let className="basketProduct"
    let classForProduct="products"
if(style){
    className+=" hide"
}

let currentPrice=+0
let index=0

const elements=itemsArray.map(item=>{
 
    currentPrice+=+item.price
    index+=1
    // const {icon,...itemProps}=item
    
          return (
        <div className={classForProduct} key={item.id+index}>
            <div className="flex">
               <img src={process.env.PUBLIC_URL + 'img/'+item.id+`.jpg`} alt="icon"/>
            </div>
            <div className="description">
                  <div>Цiна: <span>{item.price}$</span></div>
                  <div>{item.model}</div>
            </div> 
        </div>
    )
})

    return(
        <div className={className}>
           <div className="topicBasket">Вашi товари </div>
           
           <div> {elements}</div>
           <div className="buy">
               <div>Всього до сплати: <span className="price">{currentPrice}$</span></div>
               <button className="btn"
                       onClick={clearList}>
                Купити</button>
           </div>
        </div>
    )
}
export default Basket