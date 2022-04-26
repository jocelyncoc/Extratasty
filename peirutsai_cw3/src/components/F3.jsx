import React from 'react';
import '../components/F3style.css';
import {FaSearch} from 'react-icons/fa';
import {BsFillBookmarkHeartFill} from 'react-icons/bs';
import {RiFridgeFill} from 'react-icons/ri';
import Search from '../components/Search.jsx';


const F3 = () => {
  return (
    <div className='f3'>
      <div className='f3container'>
      <div className='f3right'>

      <BsFillBookmarkHeartFill size={90}/><br/><br/>

      </div>

      <div className='f3left'>
        <h2>Find something exciting out of your kitchen.</h2>
        <p>Extratasty travels the world in search of incredible restaurants and stories for our foodie community.</p>
        <p>We post weekly updates on items that fascinate us. We can't wait to share it with you, so sit back and relax with a cup of tea and stay tuned!</p>
      </div>

      </div>
    </div>
  )
}

export default F3;
