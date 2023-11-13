import React from 'react'
import './sneaker.css'
import like2 from './../img/like2.svg'
import add from './../img/add.svg'

export default function Sneaker({name, price, img, brand}) {
  return (
    <div className='sneaker'>
        <button type='button' className="sneaker__likebtn"><img src={like2} alt="like" /></button  >
        <img src={img} alt="sneaker" className="sneaker__img" />
        <div className="sneaker__info">
            {brand != 'puma'
            ? <p>Мужские Кроссовки {name}</p>
            : <p>Кроссовки {name}</p>
            }
        </div>
        <div className="sneaker__subinfo">
            <p className='sneaker__subinfo-title'>ЦЕНА:</p>
            <b>{new Intl.NumberFormat('ru-RU', {style: 'currency', currency: 'RUB'}).format(price)}</b>
            <button type='button' className="sneaker__addbtn"><img src={add} alt="add" /></button>
        </div>
    </div>
  )
}
