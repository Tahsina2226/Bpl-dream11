import React from 'react';

const FooterComponent = () => {
    return ( <
        footer className = "bg-gray-500 text-black mt-[-180px] pt-48 z-0 pb-10 w-11/12 mx-auto" > <
        div className = "flex justify-center mb-8" >
        <
        img src = "/logo-footer.png"
        alt = "Description of image"
        className = "h-24 w-auto outline-dotted text-black" / >
        <
        /div>

        <
        div className = "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6" >
        <
        div >
        <
        h3 className = "text-lg font-bold mb-4" > About Us < /h3> <
        p className = "text-gray-400" > We are a passionate team dedicated to providing the best services to our customers. < /p> < /
        div >

        <
        div >
        <
        h3 className = "text-lg font-bold mb-4" > Quick Links < /h3> <
        ul className = "space-y-2" >
        <
        li className = "text-gray-400 hover:text-gray-200 cursor-pointer" > Home < /li> <
        li className = "text-gray-400 hover:text-gray-200 cursor-pointer" > Services < /li> <
        li className = "text-gray-400 hover:text-gray-200 cursor-pointer" > About < /li> <
        li className = "text-gray-400 hover:text-gray-200 cursor-pointer" > Contact < /li> < /
        ul > <
        /div>

        <
        div >
        <
        h3 className = "text-lg font-bold mb-4" > Subscribe < /h3> <
        p className = "text-gray-400 mb-4" > Subscribe to our newsletter
        for the latest updates. < /p> <
        div className = "flex" >
        <
        input type = "email"
        placeholder = "Enter your email"
        className = "px-4 py-2 border border-gray-300 rounded-l-lg w-full focus:outline-none" /
        >
        <
        button className = "px-4 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-r-lg hover:from-yellow-500 hover:to-pink-600" >
        Subscribe <
        /button> < /
        div > <
        /div> < /
        div >

        <
        div className = "border-t border-gray-800 mt-12 pt-6 text-center" >
        <
        p className = "" > ©2024 Your Company.All Rights Reserved. < /p> < /
        div > <
        /footer>
    );
};

export default FooterComponent;