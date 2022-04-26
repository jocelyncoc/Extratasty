import {useEffect, useState} from "react";
import styled from "styled-components";
import {Link,useParams} from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Search from '../components/Search.jsx';
import Footer from '../components/Footer.jsx';
import '../pages/Recipestyle.css'



function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async ( )=> {
    const data = await fetch (
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  },[params.name]);


  return (
        <div className='top'>
        <Navbar/>
        <div className='heading'>
            <h2>Recipe</h2>
            <h3>{details.title}</h3>
        </div>

            <div className='container'>
                  <div className='left'>
                     <div className='imgcontainer'>
                     <img src={details.image} className='img1' alt=" "/>

                     </div>
                  </div>

                  <div className='right'>
                    <div className='cardcontainer'>
                            <Button className={activeTab === 'ingredients'? "active": ''} onClick={() => setActiveTab("ingredients")} >
                              Ingredients</Button>
                             <Button className={activeTab === 'instructions'? "active": ''} onClick={() => setActiveTab("instructions")}>
                             Instructions</Button>
                       {activeTab === 'instructions' && (
                            <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                       )}
                       {activeTab === 'ingredients' &&(
                             <ul>
                             {details.extendedIngredients.map((ingredient)=> (
                               <li key={ingredient.id}>{ingredient.original}</li>
                             ))}
                             </ul>
                       )}
                    </div>
                  </div>
            </div>
            <Footer/>
          </div>


  );
}


   const Button = styled.button`
   grid-template-columns: repeat(2,1fr);
   margin:3px;
   text-align: center;
   padding:10px 25px;
   font-size: 0.8rem;
   text-transform: uppercase;
   background:transparent;
   color: #51827A;
   border: 1px solid #51827A;
   cursor: pointer;
   `

export default Recipe;
