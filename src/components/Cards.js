import React from 'react'
import './Cards.css';

function Cards() {
    return (
        <div>
            <div className='cards'>
                <div className='card-menu'>
                    <h1>White</h1>
                    <h3>Element</h3>
                    <img className='smartwatch-option' src='../imagens/smartwatch-branco.svg' />
                </div>

                <div className='card-menu'>
                    <h1>Dark</h1>
                    <h3>Element</h3>
                    <img className='smartwatch-option' src='../imagens/smartwatch-preto.svg'/>
                </div>

                <div className='card-menu'>
                    <h1>Rose</h1>
                    <h3>Element</h3>
                    <img className='smartwatch-option' src='../imagens/smartwatch-rose.svg'/>
                </div>
            </div>
        </div>
    )
}

export default Cards
