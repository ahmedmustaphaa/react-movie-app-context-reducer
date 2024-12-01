import React from 'react';
import './watchlist.css';
import { useShareData } from '../Contextapi';
import { FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Watchlist() {
    const { watchlist, dispatch } = useShareData();

    return (
        <div className="watchlist">
           <div className='watchlist-length'>
           <h2 className="watchlist-title"> Watchlist</h2>
           <h3>{watchlist.length} movie</h3>
           </div>
            <div className="watchlist-container">
                {watchlist.length > 0 ? (
                    watchlist.map((movie) => (
                        <div key={movie.imdbID} className="watchlist-item">
                            {movie.Poster && (
                                <img src={movie.Poster} alt={movie.Title} className="watchlist-poster" />
                            )}
                            <div className="watchlist-actions">
                                <FaEye 
                                    className="action-icon" 
                                    onClick={() => dispatch({ type: "ADD_TO_WATCHED", payload: movie })} 
                                />
                                <IoMdClose 
                                    className="action-icon" 
                                    onClick={() => dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: movie.imdbID })} 
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-movies">Your watchlist is empty.</p>
                )}
            </div>
        </div>
    );
}

export default Watchlist;