import React from 'react' 
import gift from "../techs/Gift.png"
import mobile from "../techs/mobile.png"
import wallet from "../techs/wallet _remove.png"
import group from "../techs/Group 8955.png"
import "../techs/techs.css"

const Techs = () => {
  return (
    <div class="techs pt-5 pb-5 text-center">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-sm-6 col-md-3 col-lg-3 mt-3 mb-3 d-flex align-items-center ">
            <div className="text"><h2 className='h'>عروض حصرية</h2>
            <p className='p'>خصومات كبيرة علي منتجاتنا</p>
            </div>
<img className='img' src={gift} class=""></img>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 mt-3 mb-3 d-flex align-items-center ">
            <div className="text"><h2 className='h'>عروض حصرية</h2>
            <p className='p'>خصومات كبيرة علي منتجاتنا</p>
            </div>
<img className='img' src={wallet} class=""></img>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 mt-3 mb-3 d-flex align-items-center ">
            <div className="text"><h2 className='h'>عروض حصرية</h2>
            <p className='p'>خصومات كبيرة علي منتجاتنا</p>
            </div>
<img className='img' src={mobile} class=""></img>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-3 mt-3 mb-3 d-flex align-items-center ">
            <div className="text"><h2 className='h'>عروض حصرية</h2>
            <p className='p'>خصومات كبيرة علي منتجاتنا</p>
            </div>
<img src={group} class=""></img>
        </div>
        </div>
        <hr ></hr>
    </div>
    
  </div>
  
  
  )
}

export default Techs