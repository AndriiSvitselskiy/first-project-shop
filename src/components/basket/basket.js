import './basket.css'
const Basket=({style,itemsArray})=>{
    let className="basketProduct"
    let classForProduct="products"
if(style){
    className+=" hide"
}
console.log(itemsArray)
const elements=itemsArray.map(item=>{
    const {icon,...itemProps}=item
          return (
        <div className={classForProduct} key={item.id}>
            <div>
               <img src={process.env.PUBLIC_URL + 'img/'+item.id+`.jpg`} alt="icon"/>
            </div>
            <div>
                  <div>{item.price}</div>
                  <div>{item.model}</div>
            </div> 
        </div>
    )
})
    return(
        <div className={className}>
            <div> {elements}</div>
           <div className="buy"><p>asflergfnsog</p></div>
        </div>
    )
}
export default Basket