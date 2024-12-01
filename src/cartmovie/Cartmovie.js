import React from 'react';
import './cartmovie.css';

import { useShareData } from '../Contextapi';
import Swal from 'sweetalert2';

function Cartmovie({ movie }) {
    const { watchlist, dispatch, watched } = useShareData();
    
    const storeItemWatchlist = watchlist.find((o) => o.imdbID === movie.imdbID);
    const storeWatched = watched.find((o) => o.imdbID === movie.imdbID);
    const StoreWatchlist = storeItemWatchlist ? true : storeWatched ? true : false;
    const storeWatch = storeWatched ? true : false;

    const handleAddToWatchlist = () => {
        dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
        Swal.fire({
            icon: 'success',
            title: 'Added to Watchlist',
            text: `${movie.Title} has been added to your watchlist!`,
            confirmButtonText: 'Ok',
            customClass: {
                popup: 'swal2-custom-popup', // Custom class for popup
                title: 'swal2-title', // Custom class for title
                content: 'swal2-content', // Custom class for content
                confirmButton: 'swal2-confirm' // Custom class for button
            }
        });
    };

    const handleAddToWatched = () => {
        dispatch({ type: "ADD_TO_WATCHED", payload: movie });
        Swal.fire({
            icon: 'success',
            title: 'Added to Watched',
            text: `${movie.Title} has been added to your watched movies!`,
            confirmButtonText: 'Ok',
            customClass: {
                popup: 'swal2-custom-popup',
                title: 'swal2-title',
                content: 'swal2-content',
                confirmButton: 'swal2-confirm'
            }
        });
    };

    return (
        <div className='cart-movie'>
            <img src={movie.Poster} alt={movie.Title} className='cart-movie-poster' />
            <div className='cart-info'>
                <h3 className='cart-title'>{movie.Title}</h3>
                <h4 className='cart-year'>{movie.Year}</h4>
                <div className='btns'>
                    <button 
                        className='btn-watchlist' 
                        disabled={StoreWatchlist} 
                        onClick={handleAddToWatchlist}
                    >
                        Add to Watchlist
                    </button>
                    <button 
                        className='btn-watched' 
                        disabled={storeWatch} 
                        onClick={handleAddToWatched}
                    >
                        Add to Watched
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cartmovie;