import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cartmovie from '../cartmovie/Cartmovie';
import './add.css';

function Add() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=a4bfc54f`);
                setMovies(res.data.Search || []);
            } catch (err) {
                console.log(err);
            }
        };
        fetchApi();
    }, [searchValue]);

 
    const filteredMovies = movies.filter((movie) => 
        movie.Title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#c88e27', minHeight: '100vh' }}>
            <div className='add-container'>
                <input 
                    type="text" 
                    value={searchValue} 
                    onChange={(e) => setSearchValue(e.target.value)} 
                    placeholder="Search for a movie..."
                  className="input-field"
                />
                {filteredMovies.length > 0 ? (
                    <div className='movies-grid'>
                        {filteredMovies.map((movie) => (
                            <Cartmovie key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p className='no-movies'>No movies found. Please search for a movie.</p>
                )}
            </div>
        </div>
    );
}

export default Add;