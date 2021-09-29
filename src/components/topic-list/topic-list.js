import './topic-list.css'
import Img0 from './Icon/0.png'
import Img1 from './Icon/1.png'
import Img2 from './Icon/2.png'
import Img3 from './Icon/3.png'
import Img4 from './Icon/4.png'
import Img5 from './Icon/5.png'
import Img6 from './Icon/6.png'
import Img7 from './Icon/7.png'
import Img8 from './Icon/8.png'
import Img9 from './Icon/9.png'
import Img10 from './Icon/10.png'
import Img11 from './Icon/11.png'
import Img12 from './Icon/12.png'
import Img13 from './Icon/13.png'
import Img14 from './Icon/14.png'
import Img15 from './Icon/15.png'
import Img16 from './Icon/16.png'
import Img17 from './Icon/17.png'

const TopicList=({list,selected,showAll})=>{
      let mas=[Img0,Img1,Img2,Img3,Img4,Img5
        ,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13
    ,Img14,Img15,Img16,Img17]
  
    const elements=list.map(item=>{
        const {icon,...itemProps}=item
              return (
        
            <div className="navItem" key={icon} onClick={()=>{
                selected(item.category)
            }}>
                <div>
                    <img src={mas[icon]} alt="icon"/> 
                    {item.category}                   
                </div>
                <div>{'>'}</div>
            </div>
        )
    })
    return(
        <div className="navigation">
           <div className="navPost">
             {elements} 
           </div>
        </div>
    
       
    )

}
export default TopicList
