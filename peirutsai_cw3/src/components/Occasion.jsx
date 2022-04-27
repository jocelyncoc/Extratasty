import React from 'react';
import '../components/Occasionstyle.css';
import {Link} from 'react-router-dom';


const Occasion = () => {
  return (
    <div className='occasion'>
        <div className='container'>
              <div className='type'>
                    <h2>Exotic Cuisines</h2>
                <div className='card-container'>
                  <div className='bg01'>
                        <div className='card'>
                             <Link to={'/Cuisine/Japanese'} className='btn'>Japanese</Link>
                        </div>
                  </div>

                  <div className='bg02'>
                  <div className='card'>
                       <Link to={'/Cuisine/French'} className='btn'>French</Link>
                    </div>
                  </div>

                  <div className='bg03'>
                  <div className='card'>
                       <Link to={'/Cuisine/Chinese'} className='btn'>Chinese</Link>
                  </div>
                  </div>

                  <div className='bg04'>
                  <div className='card'>
                       <Link to={'/Cuisine/Indian'} className='btn'>Indian</Link>
                  </div>
                  </div>

                  <div className='bg05'>
                  <div className='card'>
                       <Link to={'/Cuisine/Korean'} className='btn'>Korean</Link>
                  </div>
                  </div>

                  <div className='bg06'>
                  <div className='card'>
                       <Link to={'/Cuisine/Italian'} className='btn'>Italian</Link>
                  </div>
                  </div>



              </div>
              </div>

        </div>



    </div>
  )
}

export default Occasion;
