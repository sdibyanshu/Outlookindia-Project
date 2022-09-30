import { Box, Button, Image } from '@chakra-ui/react'
import './Navbar.css';
import{  Link } from "react-router-dom"
import Register from './Register';

import Login from './Login';





function Navbarg() {
    return (
        <>
            <Box width="100%" border='1px solid transparent'>
                <Image mt="45px" m="auto" src='https://tpc.googlesyndication.com/simgad/7117080034950156774' alt='Dan Abramov' />
            </Box>
            <Box w="30%" h="90px" m="auto" mt="10px" border='1px solid transparent'>
                <Image mt="45px" m="auto" mb="9px" src='https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg' alt='Dan Abramov' />
             
                <Link to="/Register" ><Button border="none" color="grey" colorScheme="none"  borderRadius="30px" >LOGIN | SUBSCRIBE</Button></Link>
             
            </Box>

            <div>
            {/* <Link to="/Register" ><Button>Register</Button></Link> */}
                {/* <a href="/Register">register</a> */}
               

               
          
               {/* <Link to="/Register"> <Button className="loginbtn" border="solid" color="black" colorScheme="none" mt="18px" ml="60px" borderRadius="30px">
               Register
              </Button></Link> */}
           </div>

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