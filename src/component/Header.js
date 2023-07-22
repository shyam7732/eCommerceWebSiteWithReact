import React, { useContext, useState, useEffect } from 'react'
import './Css/header.css'
import { Link, NavLink } from 'react-router-dom'
import { ecommerceContext } from './Main'


function Header() {

    const {cart} = useContext(ecommerceContext)

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 100) setSticky(true);
            else setSticky(false);
        };
    }, []);

    return (
        <>
            <header>
                <h1>
                    <NavLink to = "/">Ecommorce</NavLink>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart <span className='count'>{cart.length}</span></Link>
                        </li>
                    
                    </ul>
                </nav>
            </header>


            <header className={sticky ? "visible sticky" : "sticky"}>
                <h1>
                    <NavLink to = "/">Ecommorce</NavLink>   
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart <span className='count'>{cart.length}</span></Link>
                        </li>
                    
                    </ul>
                </nav>
            </header>
        </>
    
    )
}

export default Header