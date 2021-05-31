import React,{useEffect, useState} from 'react'
import './Banner.css'
import Axios from '../../Axios'
import {API_KEY, imageUrl} from '../../Constants/Constant'
import YouTube from 'react-youtube';

var x = Math.floor((Math.random() * 20) + 0);
function Banner() {
    const [movie, setMovie] = useState()
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        Axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then(Response=>{
            console.log(Response.data.results[x])
            setMovie(Response.data.results[x])
        }).catch(err=>{
            alert('Network Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
      
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          controls:0,
          autoplay: 1,
          modestbranding:0,
          
        },
      };
    const handleMovie = (id)=>{
        console.log(id)
        Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response=>{
            if(Response.data.results.length!==0){
                setUrlId(Response.data.results[0])
                console.log(Response.data.results[0])
            }else{
                console.log('Array empty')
            }
        })
    }
    return (
        <div>
        <div
        style={{backgroundImage : `url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content'>
                <h1>{movie ? movie.title : ""}</h1>
                <div className='banner-button'>
                    <button onClick={()=>handleMovie(movie.id)} className="banner_buttons">Play</button>
                    <button className="banner_buttons">My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
            <div>
            </div>
        </div>
            {urlId && <YouTube videoId={urlId.key} opts={opts}/> }
        </div>
    )
}

export default Banner
