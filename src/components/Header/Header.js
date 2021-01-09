import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingCart";
// import { Button } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="main">
                <img 
                    className="header__logo"
                    src="http://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                    alt=""
                />
                <p className="content">Explore <span className="explore">Plus</span></p>
                {/* <img width="10" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"></img> */} 
            </div>
            <div className="header__search">
                <input className="header__searchInput" placeholder="Search for products, brands and more" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <button>Login</button>
                <div className="header__option">
                    <span className="header__optionLineOne">More</span>                  
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header__basketCount">
                        {/* optional tie to get data? */}
                        Cart
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
