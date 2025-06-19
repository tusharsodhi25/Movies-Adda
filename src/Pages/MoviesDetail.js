import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Styling/Details.css'

const MoviesDetail = () => {
  const {id} = useParams();
  const[movie,setmovie]=useState(null);

  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(()=>{

    const fetch = async ()=>{
      try{

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        setmovie(response.data);
      }
      catch(error){
        console.log(error);
      }
      
    }
    fetch();
  },[id,API_KEY])

  if(!movie){
    return <div className='bg-black min-h-screen flex items-center justify-center '>
      <h1 className='text-white '>loading...</h1>
    </div>

  }
  return (
  <div className='div bg-black min-h-screen text-white p-10 flex gap-5'>
       <img className=' h-[480px] w-[300px]' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="error" />
       <div className='flex flex-col'>
    <h1 className=' title font-bold text-3xl'>{movie.title}</h1>
    <br />
    <p className='overview'>Movie Overview: {movie.overview}</p>
    <br />
    <p className='date'>Release Date : {movie.release_date}</p>
    <br />
    <p className='rating'>Rating : <strong>{movie.vote_average}</strong></p>


    </div>
    



  </div>
  )
}

export default MoviesDetail
