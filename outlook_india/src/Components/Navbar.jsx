import { Box, Button, Image } from '@chakra-ui/react'
import './Navbar.css';
import{  Link } from "react-router-dom"
import Register from './Register';

import Login from './Login';






function Navbarg() {

    // const Date = () => {
    //      Date()
    //   }

  return(
     <>
        <Box width="100%" border='1px solid transparent'>
            <Image mt="45px" m="auto" src='https://tpc.googlesyndication.com/simgad/7117080034950156774' alt='Dan Abramov' />
        </Box>

      <div id='datesmalllogo'>

            <div>{Date()}</div>
              

          <div id="smallicon">
              <div>
              <img src="https://www.outlookindia.com/images/home_new_v4/facebook_top.svg"   alt="" />
              </div>
              
             <div>
             <img src="https://www.outlookindia.com/images/home_new_v4/twitter_top.svg" alt="" />
             </div>
           
              <div>
              <img src="https://www.outlookindia.com/images/home_new_v4/instagram_top.svg" alt="" />
              </div>
           
             <div>
             <img src="https://www.outlookindia.com/images/home_new_v4/youtube_top.svg" alt="" />
             </div>
         </div>
          
      </div>

            <Box w="17%" h="90px" m="auto" mt="10px" border='1px solid transparent'>

                <Link to="/"><Button id="logo1btn"  > <Image border='1px solid transparent'  src='https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg' alt='Dan Abramov' /></Button></Link>

               
               <Link exact to="/Register" ><Button id="subscribebtn" border="none" color="grey" colorScheme="none" >LOGIN | SUBSCRIBE</Button></Link>
               
            </Box>

     

            <div className='flex' >
                <div  ><a href="index.html">OUTLOOK </a></div>
                <div  ><a href="bussiness.html">BUSINESS</a> </div>
                <div  ><a href="cryptocorner.html">MONEY</a> </div>
                <div  > <a href="cryptocorner.html">CRYPTO CORNER</a></div>
                <div  ><a href="travel.html">TRAVEL</a></div>
                <div  ><a href="sports.html">SPORTS</a></div>
                <div  ><a href="videos.html">VIDEOS </a></div>
                <div  > <a href="entertainment.html">ENTERTAINMENT</a> </div>
                <div  ><a href="photos.html">PHOTOS</a></div>
                <div  ><a href="">MAGAZINE</a> </div>
                <div  ><a href="esj.html">ESG BHARAT</a></div>
                <div  ><a href="">OTHERS</a> </div>
                <div  ><a href="agri.html">AGRITECH</a> </div>

                <div className="searchBox">
                    <input type="text" className="searchText" placeholder="Search Here" />
                   
                </div>

            </div>
            <hr id='hrtag' />

        </>
    )
}

export default Navbarg