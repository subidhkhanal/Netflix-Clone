import React, {useEffect, useState} from 'react';
import axios from "./axios";
import './Row.css'

function Row({title,fetchUrl,isLargeRow=false}) {
    const row__posterLarge="max-h-[250px]"
    const row__posterSmall="max-h-[100px]"
    const[movies,setMovies]=useState([])
    const base_url="https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

    return (
        <div className="text-white ml-[20px]">
            <h2 className="font-semibold">{title}</h2>
            <div className="flex overflow-y-hidden overflow-x-scroll scrollbar">
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path) )&& (

                        <img className={`${(isLargeRow && row__posterLarge) || row__posterSmall} object-contain mr-[10px] transition-transform duration-500 hover:opacity-100 hover:scale-110`}
                             key={movie.id}
                             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                             alt={movie.name}/>
                    )
                ))}
            </div>

        </div>
    );
}

export default Row;