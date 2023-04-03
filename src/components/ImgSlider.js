import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };

  return (
    <Carousel {...settings}>
        <Wrap>
            <img src='/images/slider-badag.jpg' alt='slider'/>
        </Wrap>
        <Wrap>
            <img src='/images/slider-badging.jpg' alt='slider'/>
        </Wrap>
        <Wrap>
            <img src='/images/slider-scale.jpg' alt='slider'/>
        </Wrap>
        <Wrap>
            <img src='/images/slider-scales.jpg' alt='slider'/>
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    margin-top: 70px;
    .slick-list{
        overflow: visible;
    }

    ul li button{
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }

    button{
        z-index:1;
    }

    .slick-prev {
        left: -44px;
    }

    .slick-prev:before, .slick-next:before {
        font-size:40px;
        line-height: 0;
    }
`

const Wrap = styled.div`
    cursor: pointer;
    img{
        border: 4px solid transparent;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 500ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`