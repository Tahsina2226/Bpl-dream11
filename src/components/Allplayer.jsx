import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Allplayer = ({ onSelectPlayer, coins, selectedPlayers }) => {
        const [players, setPlayers] = useState([]);
        const [error, setError] = useState(null);

        useEffect(() => {
            fetch('./player.json')
                .then((res) => {
                    if (!res.ok) throw new Error('Failed to fetch player data');
                    return res.json();
                })
                .then((data) => {
                    const updatedPlayers = data.players.map(player => ({
                        ...player,
                        price: typeof player.price === 'string' ?
                            parseFloat(player.price.replace(/[$,]/g, '')) : player.price
                    }));
                    setPlayers(updatedPlayers);
                })
                .catch((err) => {
                    console.error('Error fetching players:', err);
                    setError(err.message);
                });
        }, []);

        return ( <
            div className = "p-8" > {
                error && < p className = "text-red-500 mb-4" > Error: { error } < /p>} <
                div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" > {
                    players.map((player) => ( <
                        PlayerCard key = { player.id }
                        player = { player }
                        onSelectPlayer = { onSelectPlayer }
                        coins = { coins }
                        selectedPlayers = { selectedPlayers }
                        />
                    ))
                } <
                /div> < /
                div >
            );
        };

        const PlayerCard = ({ player, onSelectPlayer, coins, selectedPlayers }) => {
            const handleSelect = () => {
                if (selectedPlayers.some(selectedPlayer => selectedPlayer.id === player.id)) {
                    toast.error(`${player.name} is already selected.`, { position: 'top-center' });
                    return;
                }

                if (selectedPlayers.length >= 6) {
                    toast.error('You can only select up to 6 players.', { position: 'top-center' });
                    return;
                }

                if (coins < player.price) {
                    toast.error('Not enough coins to select this player.', { position: 'top-center' });
                    return;
                }

                onSelectPlayer(player);
                toast.success(`Congratulations! You have selected ${player.name}.`, { position: 'top-center' });
            };

            return ( <
                div className = "mx-auto border-2 p-4 rounded-3xl w-full" > {
                    player.image_url ? ( <
                        img src = { player.image_url }
                        alt = { player.name }
                        className = "rounded-lg h-[300px] w-[350px] m-10" / >
                    ) : ( <
                        div className = "w-1/2 bg-gray-200 flex items-center justify-center mb-4 h-[300px]" >
                        <
                        FontAwesomeIcon icon = { faUser }
                        className = "text-gray-400"
                        size = "3x" / >
                        <
                        /div>
                    )
                } <
                h3 className = "mt-6 flex text-xl items-center gap-3 font-bold" >
                <
                FontAwesomeIcon icon = { faUser }
                /> {player.name || 'Unknown Player'} < /
                h3 > <
                div className = "flex justify-between items-center mt-4" >
                <
                h3 className = "flex items-center gap-3" >
                <
                FontAwesomeIcon icon = { faFlag }
                /> {player.country || 'Unknown Country'} < /
                h3 > <
                h3 className = "w-fit bg-slate-200 p-1 rounded-xl mb-6 mt-2 font-" > { player.role || 'Unknown Role' } < /h3> < /
                div > <
                hr / >
                <
                div className = "flex justify-between items-center mb-4" >
                <
                div className = "flex items-center text-yellow-500" >
                <
                FontAwesomeIcon icon = { faStar }
                className = "mr-1" / >
                <
                span className = "text-sm font-bold" > { player.rating || 'N/A' } < /span> < /
                div > <
                /div>

                <
                div className = "flex justify-between mt-4" >
                <
                h3 className = "text-black font-bold" > { player.batting_style || 'Unknown' } < /h3> <
                h3 className = "text-[#131313B3] font-bold" > { player.bowling_style || 'Unknown' } < /h3> < /
                div > <
                div className = "mt-3 flex justify-between items-center" >
                <
                p className = "text-black font-bold" >
                Price: { player.price }
                Coins <
                /p> <
                button className = "bg-sky-100 h-fit p-2 text-black font-bold rounded-xl hover:bg-slate-500"
                onClick = { handleSelect } >
                Choose Player <
                /button> < /
                div > <
                /div>
            );
        };

        export default Allplayer;