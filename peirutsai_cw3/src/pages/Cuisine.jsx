import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link, useParams} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Search from '../components/Search.jsx';
import Footer from '../components/Footer.jsx';

import '../pages/Searchedstyle.css'


function Cuisine() {


  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
     const data = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
     );
     const recipes = await data.json();
     setCuisine(recipes.results);
   };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  },[params.type]);



  return (
    <div className='searched'>
    <Navbar/>

       <div className='scontainer'>
       <h3>Recommand Recipes</h3>
       <Search/>
    <Grid
       animate={{opacity:1}}
       initial={{opacity:0}}
       exit={{opacity:0}}
       transition={{duration:0.5}}>
     {cuisine.map((item) => {
          return(
                 <Card key={item.id}>
                   <Link to={'/recipe/' + item.id}>
                   <img src={item.image} alt= " " />
                   <h4>{item.title}</h4>
                   </Link>
                 </Card>
          )
     })}
    </Grid>
    <Footer/>
    </div>
    </div>
  );
}

const Grid = styled(motion.div)`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1f 1fr 1fr;
      gap: 2rem;
      padding: 4rem;
      padding-top: 4rem;
`;
const Card = styled.div`
position; relative;

    img {
    width:100%;
}

h4{
font-weight: 400;
text-align: center;
padding: 1 rem;
color: #51827A;
}
`;

export default Cuisine;
