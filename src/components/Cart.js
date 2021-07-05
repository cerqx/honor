import React, { useEffect, useState } from 'react'
import './Cart.css'

export default function Cart() {


    const [cart, setCart] = useState([])

    useEffect(()=>
        {setCart(localStorage.getItem('cart'));
        console.log(cart)}, [])


    
     
    return (
        
        <div>
                {/* {cart.map((cart, idx) => (
                    <div className='products-opt' key={idx}>

                        <h3>{cart.name}</h3>
                        <h4>{cart.preco}</h4>
                        <img className='opt-img' src={cart.image} alt={cart.name}/>
                        <button onClick={() => setCart('cart')} className='btn'>Teste</button>
                        <button onClick={() => consultar('cart')}>Teste</button>
                        <button onClick={() => apagar('cart')}>Apagar</button>
                    </div>
                    ))}  */}
            
        </div>
        
    )
}
