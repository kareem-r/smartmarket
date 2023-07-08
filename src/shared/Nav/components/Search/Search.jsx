import React from 'react'
import {AiOutlineClose}from "react-icons/ai"
import "../../styles/search.modules.css"

const Search = ({show , setshow}) => {
  return (
    <div className='vh-100 w-100 ' style={{position:"fixed" ,top:"0",left:"0",zIndex:"2"}}>
  
        <div className='  w-100 vh-50 p-3 ' style={{position:"relative" , backgroundColor:"#93CADE",height:"250px",display:"grid" }}>
        <div className='searchtext'>عن ماذا تبحث ؟</div>
        
            <form onSubmit={onsubmit}>
            
            <input  type="text" className='text-light  bg-transparent mb-3 m-auto px-4 py-1 search' style={{width:"80%",display:"flex"}} placeholder='....اكتب كلمه البحث '  />
            <input type="text" className=' bg-transparent text-light mb-3 m-auto px-4 py-1     m-auto' style={{width:"80%" ,display:"none"}} placeholder='....اكتب كلمه البحث ' />

                
               
                <div  style={{cursor:"pointer",position:"absolute",top:"10px",right:"30px"}} className='text-black' >< AiOutlineClose onClick={()=>{show && setshow(false)}}/></div>

            </form>

        </div>

    </div>
  )
}

export default Search