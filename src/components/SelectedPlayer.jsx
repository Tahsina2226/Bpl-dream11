// SelectedPlayers.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedPlayers = ({ selectedPlayers, onRemovePlayer, onAddMorePlayers }) => {
        return ( <
            div className = "w-full max-w-md mb-8 ml-20" >
            <
            h1 className = "text-2xl font-bold mb-4" >
            Selected Players({ selectedPlayers.length }
                /6) < /
                h1 >

                {
                    selectedPlayers.length === 0 ? ( <
                        p className = "text-gray-500 pb-5 font-mono font-bold" > No players selected yet. < /p>
                    ) : (
                        selectedPlayers.map(player => ( <
                            div key = { player.id }
                            className = "w-full flex items-center justify-between p-2 mb-2 bg-white border border-gray-300 rounded-lg shadow-md" >
                            <
                            div className = "flex items-center" > {
                                player.image_url ? ( <
                                    img src = { player.image_url }
                                    alt = { player.name }
                                    className = "w-20 h-20 rounded-xl mr-3" /
                                    >
                                ) : ( <
                                    div className = "w-10 h-10 bg-gray-300 rounded-full mr-4" > < /div>
                                )
                            } <
                            div >
                            <
                            h2 className = "text-sm font-bold" > { player.name } < /h2> <
                            p className = "text-xs text-gray-500" > { player.role } < /p> < /
                            div > <
                            /div> <
                            button className = "text-red-500 hover:text-red-600 "
                            onClick = {
                                () => onRemovePlayer(player.id)
                            } >
                            <
                            FontAwesomeIcon icon = { faTrash }
                            /> < /
                            button > <
                            /div>
                        ))
                    )
                } <
                button className = "mb-4 px-4 py-2 bg-sky-100 text-black font-semibold rounded-lg shadow-md hover:bg-sky-200"
                onClick = { onAddMorePlayers } >
                Add More Players <
                /button> < /
                div >
            );
        };

        export default SelectedPlayers;