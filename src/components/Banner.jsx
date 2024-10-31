import React from 'react';

const Banner = ({ onClaim }) => {
    const handleClaimClick = () => {
        // alert("Credit added you account");
        if (onClaim) {
            onClaim();
        }
    };

    return ( <
        div className = "text-white py-10 px-6 text-center w-11/12 mx-auto relative"
        style = {
            {
                backgroundImage: 'url("/bg-shadow.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }
        } >
        <
        div className = "max-w-2xl mx-auto relative z-10" >
        <
        img src = "/banner-main.png"
        alt = "Main Banner"
        className = "mx-auto mb-4 w-half h-auto" /
        >
        <
        h1 className = "text-3xl font-bold mb-2 text-black font-mono" >
        Assemble Your Ultimate Dream 11 Cricket Team <
        /h1> <
        p className = "text-3xl font-bold  text-black font-mono" > Beyond Fantasy Sports < /p> <
        button className = "mt-4 bg-sky-100 outline-double px-6 py-3 rounded-lg text-black font-bold"
        onClick = { handleClaimClick } >
        Claim Free Credit <
        /button> < /
        div > <
        /div>
    );
};

export default Banner;