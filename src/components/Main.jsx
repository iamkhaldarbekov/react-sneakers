import React from 'react'
import './main.css'
import Sneaker from './Sneaker'
import nikebms from './../img/items/nikebms.png'
import nikeam270 from './../img/items/nikeam270.png'
import nikebms2 from './../img/items/nikebms2.png'
import nikek7 from './../img/items/nikek7.png'
import uac8 from './../img/items/uac8.png'
import pxabfr from './../img/items/pxabfr.png'
import jaj11 from './../img/items/jaj11.png'
import nlxviii from './../img/items/nlxviii.png'
import nlxviiil from './../img/items/nlxviiil.png'
import nkfiv from './../img/items/nkfiv.png'
import search from './../img/search.svg'

export default function Main() {
  return (
    <main>
        <div className="container">
            <div className="main__info">
              <h2 className="main__title">Все кроссовки</h2>
              <div className="main__search">
                <img src={search} alt="search" className="main__search-img" />
                <input type="text" className="main__search-input" placeholder='Поиск...' />
              </div>
            </div>
            <div className="main__items">
              <Sneaker name='Nike Blazer Mid Suede' price='12999' img={nikebms} brand='nike' />
              <Sneaker name='Nike Air Max 270' price='12999' img={nikeam270} brand='nike' />
              <Sneaker name='Nike Blazer Mid Suede' price='8499' img={nikebms2} brand='nike' />
              <Sneaker name='Puma X Aka Boku Future Rider' price='8999' img={pxabfr} brand='puma' />
              <Sneaker name='Under Armour Curry 8' price='15199' img={uac8} brand='ua' />
              <Sneaker name='Nike Kyrie 7' price='11299' img={nikek7} brand='nike' />
              <Sneaker name='Jordan Air Jordan 11' price='10799' img={jaj11} brand='nike' />
              <Sneaker name='Nike LeBron XVIII' price='16499' img={nlxviii} brand='nike' />
              <Sneaker name='Nike LeBron XVIII Low' price='13999' img={nlxviiil} brand='nike' />
              <Sneaker name='Nike Blazer Mid Suede' price='8499' img={nikebms} brand='nike' />
              <Sneaker name='Puma X Aka Boku Future Rider' price='8999' img={pxabfr} brand='puma' />
              <Sneaker name='Nike Kyrie Flytrap IV' price='11299' img={nkfiv} brand='nike' />
            </div>
        </div>
    </main>
  )
}
