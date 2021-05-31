import React, { useEffect, useState } from 'react'
import './RowPost.css'
import Axios from '../../Axios'
import {API_KEY, imageUrl} from '../../Constants/Constant'
import Youtube from 'react-youtube'


function RowPost(props) {
    const [movie, setMovie] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
        Axios.get(props.url).then(Response=>{
            // console.log(Response.data)
            setMovie(Response.data.results)
        }).catch(err=>{
            console.log('Network error')
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
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj)=>{
                    // console.log(obj.id)
                    return(
                        <img onClick={()=>handleMovie(obj.id)} className={`${props.isSmall ? 'smallPoster' : 'poster' }`}src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                    )
                })
                }
                
            </div>
            {urlId && <Youtube videoId={urlId.key} opts={opts}/> }
                
        </div>
    )
}

export default RowPost
