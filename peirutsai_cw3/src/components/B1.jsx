import React from 'react';
import {Link} from 'react-router-dom';
import '../components/B1style.css';
import Bannerimage from '../assets/Banner01.jpg';
import Search from '../components/Search.jsx';


const B1 = () => {
  return (
    <div className='hero'>
      <div className='container'>
            <div className='content'>
             <h1> Extratasty Recipes </h1>
             <p>Find your extratasty recipe with leftover ingredients </p>
             <Search/>
            </div>

      </div>
    </div>
  )
}

export default B1;
