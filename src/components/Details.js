import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import db from '../config/firebase'


const Details = () => {
    const { id } = useParams();
    const [ detailData, setDetailData ] = useState({});

    useEffect(() => {
        db.collection('movies').doc(id)
        .get()
        .then((doc) => {
            if(doc){
                setDetailData(doc.data());
            }else{
                console.log("no such movie in database");
            }
        })
        .catch((err) => {
            console.log("Error getting movie", err);
        })
    }, [id] )

  return (
    <Container>
        <Background>
            <img src={detailData.backgroundImg} alt={detailData.title}/>
        </Background>
        <ImageTitle>
            <img src={detailData.titleImg} alt={detailData.title}/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png' alt='playbutton'/>
                <span>Play</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png' alt='trailerbutton'/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupButton>
                <img src='/images/group-icon.png' alt='groupbutton'/>
            </GroupButton>
        </Controls>
        <SubTitle>
            {detailData.subTitle}
        </SubTitle>
        <Description>
            {detailData.description}
        </Description>
    </Container>
  )
}

export default Details;

const Container = styled.div`
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    display: block;
    top: 72px;
    

`
const Background= styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    z-index: -1;

    img{
        width: 100%;
        height: 100%;
        object-fit: Cover;

        @media (max-width: 768px) {
            width: initial;
          } 
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width:170px;
    margin-top: 30px;
    img{
        width: 100%;
        height: 100%;
        object-fit: Contain;
    }
`
const Controls = styled.div`
    display:flex;
    gap: 22px;
    align-items: center;
    margin-top:30px;

`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding: 0px 24px;
    display:flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;
    text-transform:uppercase;
    transition: all 250ms;

    &:hover{
        background: rgb(198, 198, 198, 0.8);
    }
    
`
const TrailerButton = styled(PlayButton)`
    background-color: rgb(0, 0, 0, 0.5);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid #fff;
    background-color: rgb(0, 0, 0, 0.6);
    cursor: pointer;
    span{
        font-size: 30px;
        color: #fff;
    }
    &:hover{
        background: rgb(198, 198, 198, 0.8);
    }
`
const GroupButton = styled(AddButton)`
background-color: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    margin-top: 25px;
    font-size: 15px;
    min-height: 20px;
`
const Description = styled.div`
    margin-top: 16px;
    font-size: 20px;
    line-height: 1.4;
    max-width: 760px;
`