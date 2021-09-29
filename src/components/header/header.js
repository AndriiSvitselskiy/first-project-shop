import React from 'react'
import './header.css'
import logo from './Img/logo_n.svg'
import basket from './Img/basket.png'

const Header=({itemsArray,hideAll,purchased})=>{
       const showProducts=()=>{
        hideAll()
        }
    return(
        <>
    <div  className="header flex">
       <img src={logo} alt="title" className="headerImg"/>
       <div className="search flex">
            <input type="search" placeholder="Я шукаю..." results="0"/>
            <button>Знайти</button>
        </div >
        <div>
            <img src={basket} 
                 alt="basket" 
                 onClick={showProducts}
                 className="basket"/>
            <span>{purchased}</span>
        </div>
    </div>
        </>
    )
}
export default Header