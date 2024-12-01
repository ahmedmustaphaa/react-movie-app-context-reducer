import React from 'react';
import { useShareData } from '../Contextapi';
import './watched.css';
import { IoEyeOff } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Watched() {
    const { watched, dispatch } = useShareData(); // Access watched movies from context
     
    return (
        <div className="watched">
        <div className='watchlist-length'>
        <h2 className="watchlist-title"> watched movie</h2>
        <h3>{watched.length} movie</h3>
        </div>
            <div className="watched-container">
                {watched.length > 0 ? (
                    watched.map((item) => (
                        <div key={item.imdbID} className="watched-item">
                            {item.Poster && <img src={item.Poster} alt={item.Title} className="watched-poster" />}
                            <div className="watched-actions">
                                <IoEyeOff 
                                    className="action-icon " 
                                    onClick={() => dispatch({ type: "REMOVE_FROM_WATCHED", payload: item.imdbID })} 
                                />
                                <IoMdClose 
                                    className="action-icon " 
                                    onClick={() => dispatch({ type: "REMOVE_FROM_WATCHED", payload: item.imdbID })} 
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no-movies">You haven't watched any movies yet.</p>
                )}
            </div>
        </div>
    );
}

export default Watched;