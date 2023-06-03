import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import axios from '../../axios'
import { imageUrl, API_KEY} from '../../constants/constants'
import './Rowpost.css'


function Rowpost(props) {

  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.url)
    .then((response)=>{ 
      setMovies(response.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      console.log(response.data);
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Array is empty');
      }
    })
  }
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj)=>{
            console.log(obj);
            return(
            
              <div className="container">
                 <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
                 <div className="name">
                  {
                    props.isSmall ?
                    <div>
                       <h3>{obj.original_title}</h3>
                    </div> 
                  :
                  <div>
                      <h1>{obj.name}</h1>
                  </div>
                  }
                 </div>  
              </div>
            )
          })
        }
      </div>
    { urlId ? <Youtube opts={opts} videoId={urlId.key}/> : console.log('No Videos Found') }
    </div>
  )
}

export default Rowpost
