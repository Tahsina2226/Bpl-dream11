import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons'; // Import faCoins

const Navbar = ({ coins }) => {
    return ( <
        nav className = "bg-white/70 backdrop-blur-lg py-4 shadow-md sticky top-0 z-50 w-11/12 mx-auto" >
        <
        div className = "container mx-auto px-4 flex justify-between items-center" >
        <
        img src = "logo.png"
        alt = "Logo"
        className = "h-15 outline-dotted" / >
        <
        ul className = "flex space-x-8" >
        <
        li > < a href = "#home"
        className = "text-[#131313B3]" > Home < /a></li >
        <
        li > < a href = "#Fixture"
        className = "text-[#131313B3]" > Fixture < /a></li >
        <
        li > < a href = "#Teams"
        className = "text-[#131313B3]" > Teams < /a></li >
        <
        li > < a href = "#schedule"
        className = "text-[#131313B3]" > Schedule < /a></li >
        <
        /ul> <
        button className = "bg-pink-100 text-black px-4 py-2 rounded-full font-bold flex items-centerd" >
        <
        span > { coins }
        Coin < /span>  <
        FontAwesomeIcon icon = { faCoins }
        className = "text-yellow-500 w-5 h-5" / > <
        /button> < /
        div > <
        /nav>
    );
};

export default Navbar;