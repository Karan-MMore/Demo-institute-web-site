import React, { useState } from 'react'
import './galleryCss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleChevronLeft,
   faCircleChevronRight,
   faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
export default function GalleryCompo(props) {
    const  galleryImages=props.gallery
    
    const [slideNumber,setSlideNumber]=useState(0);
    const [openModel,setOpenModel]=useState(false)

    const handlOpenModel=(index)=>{
         setSlideNumber(index)
         setOpenModel(true)
    }
    const handleCloseModal=()=>{
      setOpenModel(false)
    }
    const prevSlide=()=>{
       slideNumber===0?setSlideNumber(galleryImages.length -1): setSlideNumber(slideNumber - 1)
    }
    const nextButton=()=>{
       slideNumber + 1 === galleryImages.length ? setSlideNumber(0): setSlideNumber(slideNumber + 1) 
    }
  return (
    <div className=' flex justify-center items-center flex-col'>
        {
            openModel && 
            <div className='sliderWrap'>
              <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
              <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
              <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextButton}/>
              <div className='fullScreenImage'>
                 <img src={galleryImages[slideNumber].G_image} alt="" />
              </div>
            </div>
        }
        {/* <br/>
        slide number:{slideNumber}
        <br />
        total slides:{galleryImages.length}
        <br /><br /> */}
      <div className='galleryWrap'>
        {
            galleryImages && galleryImages.map((slide,index)=>{
                return(
                    <div className='single' key={index} onClick={()=>handlOpenModel(index)}>
                        <img src={slide.G_image} alt="" />
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}
