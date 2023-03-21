import React from 'react'
import styled from 'styled-components'
import {auth, provider} from "../config/firebase"

const Header = () => {
    
    const handleSignIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            alert(error.message)
        });
    }
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
        <Login onClick={handleSignIn}>Login</Login>
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    // position:fixed;
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

        @media (max-width:768px){
            display:none;
        }
    }
`
const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    cursor: pointer;
`
const Login = styled.a`
    background: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all 250ms ease-in-out;
    cursor:pointer;

    &:hover{
        background: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

`