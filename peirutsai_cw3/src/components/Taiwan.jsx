import React from 'react';
import {Link} from 'react-router-dom';
import '../components/Taiwanstyle.css';



const Taiwan = () => {
  return (
    <div className='taiwan'>

    <div className='container'>

          <div className='content'>
           <h3>Weekly Article:</h3>
           <h1>Cuisine in Taiwan</h1>
           <p>Three must try restaurants with extraordinary expereinces</p>
           <Link to={'/Weeklyarticle'}><button>Read</button></Link>
          </div>

    </div>

    </div>
  )
}

export default Taiwan;
