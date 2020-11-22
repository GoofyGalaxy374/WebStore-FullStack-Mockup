import React, {Component} from 'react'
import Navbar from './Header'
import Footer from './Footer'

import fortniteHoodie from './Images/Hoodies.png'
import kiritoHoodie from './Images/kirito_Hoodie.png'
import './css/HoodiesStyle.css'
import {Button} from 'react-bootstrap'
import $ from 'jquery'
import {FaShoppingCart, FaHeart} from 'react-icons/fa'
import {store} from './store'
import {connect} from 'react-redux'
class HoodiesPage extends Component {
    render(){
    let {productsInWishList} = this.props;
    let {productsInCart} = this.props;
    const hoodiesList=[
        {
            name: 'Game Hoodie - Фортнайт',
            image: fortniteHoodie,
            price: 36,
            cents: 96
        },
        {
            name: 'Anime Hoodie - Sword Art Online - Кирито',
            image: kiritoHoodie,
            price: 39,
            cents: 94
        },
    ]
    const addToWishlist=(id)=>{
        store.dispatch({type: 'addToFavorites', id: id})
        $('#'+id).css('color', 'purple')        
    }
    const addToCart=(id)=>{
        store.dispatch({type: 'addToCart', id:id})
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='products'>
                {hoodiesList.map((hoodie, index)=>
                <div className='hoodieWrapper'>
                    <p className='hoodieName'><FaHeart id={index} className='addFaves' onClick={()=>addToWishlist(index)}size={25}/><strong>{hoodie.name}</strong> </p>     
                    <img className='hoodieImage' src={hoodie.image}></img>
                    <div className='purchaseField'>
                        <p><strong>{hoodie.price}.<span className='priceCents'>{hoodie.cents}</span> лв.</strong></p>
                        <Button className='buyHoodieButton' variant='warning' onClick={()=>addToCart(index)}><span className='buyIcon'><FaShoppingCart></FaShoppingCart></span> <strong>Купи</strong></Button>
                        {/* <br></br> */}
                        {/* <Button className='faveHoodieButton' variant='warning'><span className='faveIcon'><FaHeart></FaHeart></span> <strong>Добави в любими</strong></Button> */}
                    </div> 
                </div>)}
            </div>
            <Footer></Footer>
        </div>
    )
}
}
const mapStateToProps=(state={productsInWishList:[{}], productsInCart:[{}]})=>{
    return{
        productsInWishList: state.productsInWishList,
        productsInCart: state.productsInCart
    }
}
export default connect(mapStateToProps)(HoodiesPage)