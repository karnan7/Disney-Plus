import React from 'react'
import styled from 'styled-components'

const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png' alt='viewers'/>
            <video  autoplay plays-inline muted loop > 
                <source src="/videos/disney.mp4" type="video/mp4"/> 
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png' alt='viewers'/>
            <video autoplay plays-inline muted loop>
                <source src='/videos/pixar.mp4'  type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png' alt='viewers'/>
            <video autoplay plays-inline muted loop>
                <source src='/videos/pixar.mp4'  type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png' alt='viewers'/>
            <video autoplay plays-inline muted loop>
                <source src='/videos/pixar.mp4'  type="video/mp4"/>
            </video>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png' alt='viewers'/>
        </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display:grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 25px;
    padding: 30px 0px 26px;
`

const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249, 0.1); 
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }

    &:hover{
        transform: scale(1.12);
        video{
            opacity:1;
            z-index: -1;
        }
    }



`