import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";

function Search() {

  const[input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/"+ input);
  };


  return (
    <Formstyle onSubmit={submitHandler}>
    <div>
       <FaSearch></FaSearch>
       <input onChange={(e)=> setInput(e.target.value)}
       type="text"
       value={input}
       />

    </div>
    </Formstyle>
  );
};


const Formstyle = styled.form`


     input{
           border: none;
           background:linear-gradient(35deg, #51827A, #F5E8A2);
           font-size:1.5rem;
           color: white;
           padding: 1rem 3rem;
           border: none;
           border-radius: 1rem;
           outline: none;
           width: 65%;

     }

     svg{
          position:relative;
          left: 40px;
          transform: translate (100%, -50%);
          color:white;

     }

`


export default Search
