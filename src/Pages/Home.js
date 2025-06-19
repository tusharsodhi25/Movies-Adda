import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../Styling/Home.css'
const Home = () => {

    const API_KEY = process.env.REACT_APP_API_KEY

    const[movies,setmovies] = useState([]);
    const[hasSearched ,sethasSearched] = useState(false);

   
    const[searchmovie,setsearchmovie] = useState("");

    const handler = async()=>{
        try{
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&&query=${searchmovie}&language=en-US&page=1&include_adult=false`)
            console.log(response.data.results)
            setmovies(response.data.results)
            sethasSearched(true);
        }
        catch(error){
            console.log(error);
        }
    }
  return (
  <>

  <div className='bg-black min-h-screen p-5'>
    <h1 className=' header text-5xl font-bold font-serif text-white pt-10 flex items-center justify-center'>MOVIES ADDA</h1>
        <div className='flex items-center justify-center pt-4 gap-3'>
        <input type="text"
         placeholder='find movies...'
         value={searchmovie}
         onChange={(e)=>setsearchmovie(e.target.value)}
         className='input text-white rounded-full border-2 border-white p-1 w-[300px]' />
        <button onClick={handler} className=' button p-2 w-[100px]  rounded-full bg-white text-black'>Find</button>
        </div>
  
       
       
    
         <div className='movie grid grid-cols-4 gap-1 p-10 m-3'>
      { hasSearched&&movies.length === 0? (<p className=' text-white'>No Movie Found</p>):(
      
             movies.map((movie)=>(
               <Link key={movie.id} to = {`/movies/${movie.id}`}>
            <div key={movie.id}>
                <div className='flex flex-col items-center gap-1'>
                   <img className='h-[250px] w-[200px]' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='error'/>
                <p className=' text-white text-[15px]'>{movie.title}</p>
                </div>
                </div>  </Link>)
        ))
        
      }

    
    </div>
       
       
       
       
     
         
      


  </div>
  
  
  </>
 
  )
}

export default Home
