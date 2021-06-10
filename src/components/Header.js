import React, {useState} from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Header() {

    const [open, setOpen] = useState(false);
    


    
    
    return (
        <div className='header-1'>
           
            <div className='logo'>
                <img src='../imagens/logo-honor.svg'></img>
            </div>
        
            <div className='menu-items'>

            {
                !open ? <FaBars value={{color: 'white'}}  onClick={() => setOpen(!open)} className ='burger'/> :  <AiOutlineClose onClick={() => setOpen(!open)} className='close'/>
            }   

             

                <ul style={{transform: open ? "translateX(0px)" : ""}}>
                    <li className='options'>
                        <Link to='/' className='options'>
                            Home
                        </Link>
                    </li>

                    <li className='options'>
                        <Link to='/products' className='options'>
                            Products
                        </Link>
                    </li>
                </ul>    
            </div>

            

        </div>
    )
}

export default Header
