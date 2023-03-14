import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Nav>
        <Logo src='./images/logo.svg'/>
        <NavMenu>
            <a>
                <img src='./images/home-icon.svg'/>
                <span>HOME</span>
            </a>
            <a>
                <img src='./images/search-icon.svg'/>
                <span>SEARCH</span>
            </a>
            <a>
                <img src='./images/watchlist-icon.svg'/>
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src='./images/original-icon.svg'/>
                <span>ORIGINAL</span>
            </a>
            <a>
                <img src='./images/movie-icon.svg'/>
                <span>MOVIES</span>
            </a>
            <a>
                <img src='./images/series-icon.svg'/>
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src="./images/Adith.jpg"/>
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 70px;
    cursor: pointer;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left:20px;
    
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size:13px;
            letter-spacing:1.42px;
            position: relative;

            &:after{
                content:"";
                background: #fff;
                height: 2px;
                transform-origin: left center;
                opacity: 0;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
            }
        }

        &:hover{
            span:after{
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }
`
const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
`
