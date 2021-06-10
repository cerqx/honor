import React, {useState} from 'react'
import './Content.css';
import Slide from './Slide/index'
import Cards from './Cards'

function Content() {
    return (
        <div className=''>
           
           <div className='conteudo-1'>

               <div>

                    <div className='text'>
                        <h1>SmartWatch</h1>
                        <h3>Element Serie</h3>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <br/>.Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure<br/> dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className='card'>
                        <Cards/>    
                    </div> 
               </div>

                
            
                <div>
                    <Slide className='slide' />
                </div>



            </div>
            
            
           
            
        </div>
    )
}

export default Content
