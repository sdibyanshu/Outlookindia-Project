import { Box, Image } from '@chakra-ui/react'
import './Navbar.css';


function Navbarg() {
    return (
        <>
            <Box width="100%" border='1px solid transparent'>
                <Image mt="45px" m="auto" src='https://tpc.googlesyndication.com/simgad/7117080034950156774' alt='Dan Abramov' />
            </Box>
            <Box w="30%" h="90px" m="auto" mt="10px" border='1px solid transparent'>
                <Image mt="45px" m="auto" mb="9px" src='https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg' alt='Dan Abramov' />
                <a className="anchorlogin" href="">LOGIN | SUBSCRIBE</a>
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
                    {/* <a href="#" className="searchBtn">
                           
                    </a> */}
                </div>

            </div>
            <hr id='hrtag' />

        </>
    )
}

export default Navbarg