import React, {useEffect, useState} from 'react';
import './Banner.css'
import axios from './axios'
import requests from "./Requests"

function Banner() {

    const[movie,setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                    ]
            )
            return request
        }
        fetchData()
    },[])


    function truncate(string,n){
        return string?.length >n ?string.substr(0,n-1) + '...' :string
    }
    return (
        <header className="h-[448px] object-contain" style={{
            backgroundSize:"cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition:"center center"
        }}>
            <div className="ml-[30px] pt-[140px]  h-[190px]">
                <h1 className="text-white font-extrabold text-5xl pb-1.5">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div>
                    <button className="text-white font-bold	rounded-[0.2vw] bg-[#33333380] pr-[2rem] pl-[2rem] mr-[1rem] hover:bg-[#e6e6e6] hover:transition-all hover:delay-300 hover:text-black">Play</button>
                    <button className="text-white font-bold	rounded-[0.2vw] bg-[#33333380] pr-[2rem] pl-[2rem] mr-[1rem] hover:bg-[#e6e6e6] hover:transition-all hover:delay-300 hover:text-black">My List</button>
                </div>
                <h1 className="w-[45rem] max-w-sm text-white font-extrabold text-sm pt-4">{truncate((movie?.overview),150)}</h1>
            </div>
            <div className="banner--fade--bottom"/>
        </header>
    );
}

export default Banner;