import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import laugh from '../laugh.svg';
import icon from '../images/icon.svg'

const Jokes = () => {
    const [jokes, setJoke] = useState('');
    const generateJoke = () => {
        axios.get('https://api.chucknorris.io/jokes/random')
        .then((res) => {
            setJoke(res.data)
            // console.log(res.data)
        })
    }

    const { value } = jokes

    useEffect(() => {
        generateJoke()
    }, [])

    if(jokes.length === 0){
        return(
            <div className='wait'>
                <img id='image1' src= { icon } alt="Please Wait..."/>
                <h1>Please Wait...</h1>
            </div>
        )
    }

    

  return (
   <section>
    <div className='container'>
        <h1>Chuck Norris Jokes<span><img src={laugh} id='image' alt='laugh'/></span></h1>
        <p dangerouslySetInnerHTML ={ {__html: value}} id='joke'/>
        <button onClick={generateJoke}> Next Joke</button>
    </div>
   </section>
  )
}

export default Jokes