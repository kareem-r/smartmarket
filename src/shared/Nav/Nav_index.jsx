import React , {useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{AiOutlineSearch} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineHeart}from "react-icons/ai"
import{SlBasket}from"react-icons/sl"
import Smartimage from "../Nav/images/favicon.ico"
import Search from './components/Search/Search';
const Nav_index = () => {
  const[showsearch,setshowsearch]=useState(false)
  useEffect(()=>{
    
   },[showsearch])
   const handleEdit=(user)=>{
   setshowsearch(true)

  }
  return (
    <>
   <Navbar collapseOnSelect expand="lg" className="bg-white">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
      <Nav className="me-auto">
      <Navbar.Brand href="#"><SlBasket></SlBasket></Navbar.Brand>
     
            <Nav.Link href="#"><AiOutlineHeart ></AiOutlineHeart></Nav.Link>
            <Nav.Link href="#"><BsFillPersonFill></BsFillPersonFill>
            </Nav.Link>
            <Nav.Link href="#"> <AiOutlineSearch onClick={()=>{setshowsearch(true)}}></AiOutlineSearch></Nav.Link>
            {(showsearch) && <Search show={showsearch} setshow={setshowsearch} />}

       
          </Nav>
          <Nav>
            <Nav.Link href="#">اتصل بنا</Nav.Link>
            <Nav.Link eventKey={2} href="#">
            المدونة
            </Nav.Link>
            <Nav.Link href="#">الشروط والاحكام</Nav.Link>
            <Nav.Link href="#">نبذة عنا</Nav.Link>
            <Nav.Link href="#">الخدمات</Nav.Link>
            <Nav.Link href="#">المنتجات</Nav.Link>
            <Nav.Link href="#" className='text-info'>الرئيسية</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
        <div className='ps-3'><img src={Smartimage}></img></div>
      </Container>
      
    </Navbar>
    </>
  )
}

export default Nav_index