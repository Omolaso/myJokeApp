import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../App.css';
import laugh from '../laugh.svg';
const Jokes = () => {
    const [jokes, setJoke] = useState('');
    const generateJoke = () => {
        axios.get('http://api.icndb.com/jokes/random')
        .then((res) => {
            setJoke(res.data.value)
        })
    }

    const { joke } = jokes

    useEffect(() => {
        generateJoke()
    }, [])

    

  return (
   <section>
    <div className='container'>
        <h1>Chuck Norris Jokes<span><img src={laugh} id='image' alt='laugh'/></span></h1>
        <p dangerouslySetInnerHTML ={ {__html: joke}} id='joke'/>
        <button onClick={generateJoke}> Next Joke</button>
    </div>
   </section>
  )
}

export default Jokes