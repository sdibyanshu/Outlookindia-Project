import React, { useState } from 'react'
import { VStack, Heading, Text, Grid, GridItem, FormControl, FormLabel, Input, Textarea, Select, Button, Center, Box, state, setter } from "@chakra-ui/react"
import Allroutes from './Allroutes'
import { navigate, useNavigate } from 'react-router-dom'
import './Register.css';

const initstate = {
  Name: "",
  Email: "",
  Password: "",

}


export default function Register() {



  const [formdatas, setformdatas] = useState(initstate)
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdatas({ ...formdatas, [name]: value })

  }
  console.log(formdatas)

  const handleClick = () => {

    let registeredUser = JSON.parse(localStorage.getItem("registeredUser")) || [];

    registeredUser.push(formdatas);
    localStorage.setItem("registeredUser", JSON.stringify(registeredUser));

    navigate("/Login")
    // console.log(initstate)

  }

  // const{Name,Email,Password,Mobile,Experience,Industry,Skill,Location}=formdatas

  return (
    <div>


      <h1 id='regh1'>Register Here</h1>
      <Center>
        <Box id='bx'  mt={10}  mb={20}  
         border='1px'  boxShadow='xs' p='20' rounded='md' bg='white'>
          <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }} >
            <FormControl isRequired >
              <FormLabel>First Name</FormLabel>
              <Input w={"300px"} type="text"
                placeholder='First name'
                //  value={formdatas.Name}
                name="Name"
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>


          <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }} >
            <FormControl isRequired>
              <FormLabel>Email id</FormLabel>
              <Input w={"300px"} type="text"
                placeholder='Email id'
                //  value={Email}
                name="Email"
                onChange={handleChange}
              />
            </FormControl>


          </GridItem>


          <GridItem rowSpan={1} colSpan={{ base: 2, md: 1 }} >


            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input w={"300px"} type="text"
                placeholder='Password'
                //  value={Password}
                name="Password"
                onChange={handleChange}
              />
            </FormControl>


          </GridItem>


          <GridItem colSpan={2} >
            <FormControl isRequired>

              <Button w="300px" variant='solid'
                mt={"30px"}
                bg="black"
                color={"white"}
                fontSize={"20px"}
                padding="25px"
                marginLeft={"0px"} onClick={handleClick}>Register</Button>
            </FormControl>
          </GridItem>


        </Box>
      </Center>
    </div>
  )
}