import React from 'react';

function Clrful() {
    return ( <
        div className = "relative py-8 mt-20 rounded-lg mx-auto max-w-4xl mb-12" > { /* Background with blur and shadow */ } <
        div className = "absolute inset-0 bg-gradient-to-r from-[#d6e4ff] to-[#f7ffcc] rounded-lg  outline outline-5 outline-white shadow-lg  " > < /div>

        <
        div className = "relative z-10 p-8 rounded-lg " >
        <
        h2 className = "text-3xl font-semibold mb-2 text-center" > Subscribe to our Newsletter < /h2> <
        p className = "text-gray-600 mb-6 text-center" > Get the latest updates and news right in your inbox! < /p> <
        div className = "flex justify-center items-center space-x-4" >
        <
        input type = "email"
        placeholder = "Enter your email"
        className = "px-6 py-3 border border-gray-300 rounded-lg w-80 focus:outline-none" /
        >
        <
        button className = "px-6 py-3 bg-gradient-to-r from-pink-300 to-yellow-300 text-white font-semibold rounded-lg hover:from-pink-400 hover:to-yellow-400 shadow-md" >
        Subscribe <
        /button> < /
        div > <
        /div> < /
        div >
    );
}

export default Clrful;