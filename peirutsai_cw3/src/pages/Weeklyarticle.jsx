import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Heading from '../components/Heading.jsx';
import Footer from '../components/Footer.jsx';
import {MdLocationPin} from 'react-icons/md';
import {AiFillHome} from 'react-icons/ai';
import '../pages/Weeklyarticlestyle.css'
import article01 from '../assets/Article01.jpg';
import article02 from '../assets/Article02.jpg';
import article03 from '../assets/Article03.jpg';
import article04 from '../assets/Article04.jpg';
import article05 from '../assets/Article05.jpg';
import article06 from '../assets/Article06.jpg';
import article07 from '../assets/Article07.jpg';
import article08 from '../assets/Article08.jpg';
import article09 from '../assets/Article09.jpg';
import article10 from '../assets/Article10.jpg';
import article11 from '../assets/Article11.jpg';
import article12 from '../assets/Article12.jpg';
import article13 from '../assets/Article13.jpg';
import article14 from '../assets/Article14.jpg';
import article15 from '../assets/Article15.jpg';
import article16 from '../assets/Article16.jpg';
import article17 from '../assets/Article17.jpg';


const Weeklyarticle = () => {
  return (
    <div>
       <Navbar/>
       <Heading/>
        <div className='wcontainer'>
           <div className='wcontent'>

           <p><span className='name1'>EPISODE 001 / 20 APR 2022</span></p>

           <img src={article01} className='img01' alt=''/>
           <p><span className='first'>T</span>aiwan is located in east Asia with a total area of 36,197 km2 and a population of 23.57 million people. Taiwanese food has a well-deserved reputation for being readily accessible to most people's tastes all around the world (stinky tofu might be an exception). Bubble tea and gua bao are two of Taiwan's most famous and delectable street foods that are trending in London currently. As the rise of Taiwanese food becoming more and more popular, Extratasty would like to introduces you more special cuisines to try out when visiting Taiwan. In this week's article, we selected three outstanding restaurants, two of which combine concept with other foreign countries and one using meticulous skills and nostalgic vibe to elevate classic Taiwanese meals to new heights.</p>

          <br/><br/>
          <h2>/ RAW /</h2>
          <h3>Inserting French dinning concept into Taiwanese cuisine </h3>
          <img src={article02} className='img01' alt=''/>
          <br/>
          <p>RAW is currently led by renowned Taiwanese chef André Chiang, who worked in a number of restaurants in Singapore before returning to Taiwan. RAW is known for fusing Taiwanese cuisine with high-end French dining to create a unique and enticing experience.In the year 2021 and 2020, it was both awarded in two Michelin stars. Dinning at RAW is a process of learning Taiwanese culture and having fun with food through the designed storytelling experience. Every season of the menu, it would disassembled the ingredients with themed concept, experimenting with different cooking technics and conceptualising the memory of common Taiwanese food. From the courses we tried, the motif of the bellow set cuisines are inspired by the changing seasons, with Taiwanese street delicacies and traditional pastries transformed as raindrops or a dusting of snow. </p>

          <div className='column1'>
          <img src={article03} className='img01' alt=''/>
          <img src={article04} className='img01' alt=''/>
          <img src={article05} className='img01' alt=''/>
          </div>

          <div className='column2'>
          <img src={article06} className='img01' alt=''/>
          <img src={article07} className='img01' alt=''/>
          </div>


          <br/><br/>
          <h2>/AJ House/</h2>
          <h3>A Hidden Jam in local apartment building</h3>
          <img src={article12} className='img1' alt=''/>
          <p>AJ House is close to the famous Beitou hot spring and is hidden in an inconspicuos apartment building. We highly recommand you take a hot spring before heading to the dinner or lunch, it will relax you and tickle your taste buds. AJ House is a family-run restaurant that puts a lot of effort into every dish. The owner is also a big fan of telling stories and introducing backstories. He is very concerned about where his food comes from. On the surface, dishes may appear simple, but they can take weeks or even months to prepare or obtain the appropriate components, which many people underestimate. Some dishes may not be available again (due to climate change) until the proprietor finds the proper premium ingredients.The food's silky texture and enticing aroma always piqued your interest in what was to come next.</p>
          <div className='column2'>
          <img src={article16} className='img01' alt=''/>
          <img src={article17} className='img01' alt=''/>
          </div>
          <div className='column1'>
          <img src={article13} className='img01' alt=''/>
          <img src={article14} className='img01' alt=''/>
          <img src={article15} className='img01' alt=''/>
          </div>


          <br/><br/>
          <h2>/ MINIMAL /</h2>
         <h3>Adding a more Taiwanese touch to Gelato</h3>
         <img src={article08} className='img1' alt=''/>
         <p>Sweets carry you back to your youth and can re-energize you as an adult. If one scoop of gelato isn't enough to cheer you up, go for two. Morover, dessert after main courses is a must and a enjoyable ending. Taiwanese gelato shop 'MINIMAL' is a second line open by the one-star Michelin restaurant 'Sur'. MINIMAL aims to combine the beauty of gelato with the flavours of Taiwanese street cuisine, creating unexpected but familiar flavours. The traditional jelly herb and peanut flavoured gelato combination is a must-try. Smoked plum with Makuay (a spice commonly used by Taiwanese aboriginals) might be the one you're looking for if you want to try something new and different.</p>

         <div className='column1'>
         <img src={article09} className='img01' alt=''/>
         <img src={article10} className='img01' alt=''/>
         <img src={article11} className='img01' alt=''/>
         </div>


         <br/><br/><br/>
         <h2>Contact Information</h2>
         <br/>

          <div className='contact'>
          <div className='contactleft'>
          <h5><MdLocationPin size={20}/>RAW</h5>
          <h6>No. 301, Lequn 3rd Rd,<br/> Zhongshan District, Taipei City, Taiwan</h6>
          <h6><span className='bold'>Reservation</span><br/>http://www.raw.com.tw/</h6>
          <h6><span className='bold'>Contact</span><br/>+886 2 8501 5800</h6>
          </div>

          <div className='contactmiddle'>
          <h5><MdLocationPin size={20}/>AJ House</h5>
          <h6>Room 304, No.220, Guangming Rd,<br/> Beitou District, Taipei City, Taiwan</h6>
          <h6><span className='bold'>Reservation</span><br/>http://www.aj-house.co/</h6>
          <h6><span className='bold'>Contact</span><br/>+886 2 2892 3613</h6>
          </div>

          <div className='contactright'>
          <h5><MdLocationPin size={20}/>MINIMAL</h5>
          <h6>No. 16, Lane 133, Section 1, Meicun Rd,<br/> West District, Taichung City, Taiwan</h6>
          <h6><span className='bold'>Reservation</span><br/>https://www.facebook.com/minimal.gelato/</h6>
          <h6><span className='bold'>Contact</span><br/>+886 4 2321 9080</h6>
          </div>
          </div>

       </div>
     <Footer/>
      </div>
    </div>
  )
}

export default Weeklyarticle;
