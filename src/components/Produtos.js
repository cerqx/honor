import React, { useState } from 'react';
import './Produtos.css';
import Cart from './Cart';

export default function Produtos() {

    // const [cart, setCart] = useState([]); 

    const [cart, setCart] = useState()
    
    const addToCart = (produto) => {
        console.log('funcionou')
        localStorage.setItem(produto)
        // setCart([...cart, produto]);
    };
    
    const consultar = (cart) => {
        alert(localStorage.getItem('cart'))
    }

    const apagar = (cart) => {
        localStorage.removeItem('cart')
    }

    const [produto] = useState([
        {
            name: 'SmartWatch Pro X',
            preco: 'R$1300,00',
            image: '../../imagens/smartwatch-preto.svg'
        },

        {
            name: 'SmartWatch Start',
            preco: 'R$800,00',
            image: '../../imagens/smartwatch-branco.svg'
        },
        
        {
            name: 'SmartWatch Pro Ultra',
            preco: 'R$1800,00',
            image: '../../imagens/smartwatch-rose.svg'
        }
    ]);

    return (
        
        <div>
                {produto.map((produto, idx) => (
                    <div className='products-opt' key={idx}>

                        <h3>{produto.name}</h3>
                        <h4>{produto.preco}</h4>
                        <img className='opt-img' src={produto.image} alt={produto.name}/>
                        <button onClick={() => addToCart('cart', produto)}className='btn'>Adicionar ao Carrinho</button>
                    </div>
                    ))} 
            
        </div>
    )
}
