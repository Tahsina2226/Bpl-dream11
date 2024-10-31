import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import AllPlayer from './components/AllPlayer';
import FooterComponent from './components/Footer';
import Selected from './components/SelectedPlayer';
import Clrful from './components/Clrful';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [coins, setCoins] = useState(0);
    const [selectedCount, setSelectedCount] = useState(0);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [view, setView] = useState('available');

    const handleClaimCoins = () => {
        setCoins(prevCoins => prevCoins + 50000);
        toast.success('Congratulations! You have claimed 50,000 coins.', { position: 'top-center' });
    };

    const handleSelectPlayer = (player) => {
        setCoins(prevCoins => prevCoins - player.price);
        setSelectedCount(prevCount => prevCount + 1);
        setSelectedPlayers(prevPlayers => [...prevPlayers, player]);
    };

    const handleRemovePlayer = (playerId) => {
        const playerToRemove = selectedPlayers.find(player => player.id === playerId);
        setSelectedPlayers(prevPlayers => prevPlayers.filter(player => player.id !== playerId));
        setSelectedCount(prevCount => prevCount - 1);
        setCoins(prevCoins => prevCoins + (playerToRemove ? playerToRemove.price : 0));
        toast.info('Player removed from the squad.', { position: 'top-center' });
    };

    const handleViewChange = (newView) => {
        setView(newView);
    };

    const handleAddMorePlayers = () => {
        setView('available');
    };

    return ( <
        div className = "app" >
        <
        Navbar coins = { coins }
        selectedCount = { selectedCount }
        /> <
        Banner onClaim = { handleClaimCoins }
        />

        <
        div className = "flex flex-col w-11/12 mx-auto pt-7 pb-5 " >
        <
        div className = "sticky top-0 z-10 bg-white py-4" >
        <
        div className = "flex justify-end mt-4" >
        <
        button className = { `px-4 py-2 rounded mr-2 ${view === 'available' ? 'bg-pink-400 text-white' : 'bg-gray-500 text-gray-700'}` }
        onClick = {
            () => handleViewChange('available')
        } >
        Available <
        /button> <
        button className = { `px-4 py-2 rounded ${view === 'selected' ? 'bg-pink-400 text-white' : 'bg-gray-500 text-gray-700'}` }
        onClick = {
            () => handleViewChange('selected')
        } >
        Selected({ selectedCount }) <
        /button> < /
        div > <
        /div> < /
        div >

        <
        div >
        <
        p className = "mt-4 font-bold text-2xl font-mono text-left w-11/12 mx-auto pb-5" >
        Assemble Your Ultimate Team <
        /p> < /
        div >

        {
            view === 'available' ? ( <
                AllPlayer onSelectPlayer = { handleSelectPlayer }
                coins = { coins }
                selectedPlayers = { selectedPlayers }
                />
            ) : ( <
                Selected selectedPlayers = { selectedPlayers }
                onRemovePlayer = { handleRemovePlayer }
                onAddMorePlayers = { handleAddMorePlayers }
                />
            )
        }

        <
        Clrful / >
        <
        FooterComponent / >
        <
        ToastContainer / >
        <
        /div>
    );
};

export default App;