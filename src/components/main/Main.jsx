import React from 'react'
import Container from '../../utils'
import { useState, useEffect, useRef } from 'react'
import c from './Main.module.css'
import datajsons from '../../jwt/data-json.js'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid'
const Main = () => {
    const {carousel_images} = datajsons.main
    const carouselEl = useRef()
    const [carouselCount, setCarouselCount] = useState(0)
    useEffect(() => {
        carouselEl.current.scrollLeft = carouselCount * carouselEl.current.offsetWidth;
    }, [carouselCount])
    const next_img = () => {
        if(carouselCount < carousel_images.length-1) setCarouselCount(carouselCount+1)
        else setCarouselCount(0)
    }
    const prev_img = () => {
        if(carouselCount > 0) setCarouselCount(carouselCount-1)
        else setCarouselCount(carousel_images.length - 1)
    }
    return (
        <Container>
            <div className={`${c.btn_carousel_wrapper} main__btn__wrapper`}>
                <button onClick={prev_img}><FaChevronLeft/></button>
                <button onClick={next_img}><FaChevronRight/></button>
            </div>
            <div ref={carouselEl} className={c.carousel_container}>
                {carousel_images.map(e => 
                <div key={uuidv4()} className={c.carousel_box_image}><img src={e.url} alt="" /><h3>{e.heading}</h3></div>
                )}
            </div>
            <div className={c.main_about_us_wrapper}>
                <h2 className={c.about_us__heading}>About us</h2>
                <p className={c.text__body}>Focused on simplifying the user experience, the company strives to create intuitive, accessible designs that make navigation effortless for all users. Whether for personal or business needs, the goal is to provide a seamless online experience that meets customer expectations.</p>
            </div>
        </Container>
    )
}

export default Main
