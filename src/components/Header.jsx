import React from 'react'
import './header.css'
import cart from './../img/cart.svg'
import like from './../img/like.svg'
import profile from './../img/profile.svg'
import header from './../img/header.png'
import adidasdisney from './../img/logo/adidasdisney.png'
import logo from './../img/logo/logo.png'

export default function Header() {
  return (
    <header>
        <div className="container">
            <nav className="nav">
                <div className="logo">
                    <img src={logo} alt="" className="logo__img" />
                    <h1 className="logo__title">react sneakers</h1>
                    <p className="logo__subtitle">Магазин лучших кроссовок</p>
                </div>
                <ul className="nav__links">
                    <li><img className='nav__links-item' src={cart} alt="cart" /></li>
                    <li><img className='nav__links-item' src={like} alt="like" /></li>
                    <li><img className='nav__links-item' src={profile} alt="profile" /></li>
                </ul>
            </nav>
            <div className="header__content">
                <img src={adidasdisney} alt="sponsor" className="header__content-sponsor" />
                <div className="header__content-title">
                    <span style={{color: '#8BB43C'}}>Stan Smith</span>, Forever!
                </div>
                <button type='button' className="header__content-btn">КУПИТЬ</button>
                <img className='header__background' src={header} alt="header" />
            </div>
        </div>
    </header>
  )
}
