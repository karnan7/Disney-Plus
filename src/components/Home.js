import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommends from './Recommends'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import db from '../config/firebase'
import {setMovies} from  "../features/Movie/movieSlice"
import { selectUserName } from '../features/user/userSlice'

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  

  useEffect (() => {
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let trending = [];
    db.collection('movies').onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type){
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() } ]
            break;

          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() } ] 
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() } ] 
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() } ] 
            break;
          default:
            
        }
      })

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original : originals,
          trending: trending,
        })
      )

    })
  }, [userName]);
  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        <Recommends/>
        <NewDisney/>
        <Originals/>
        <Trending/>
    </Container>
  )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc( 3.5vw + 5px );
    background: url("/images/home-background.png") center/ cover no-repeat fixed ;
    overflow-x: hidden;
`