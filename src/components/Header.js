import React, {useEffect} from 'react'
import styled from 'styled-components'
import {auth, provider} from "../config/firebase"
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate, Link} from 'react-router-dom';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState
} from '../features/user/userSlice'

const Header = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user);
                navigate("/home")
            }
        })
    }, [userName])

    const handleSignIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
           setUser(result.user);
        })
        .catch((error) => {
            alert(error.message)
        });
    }

    const handleLogOut = () => {
        auth
        .signOut()
        .then(() => {
            dispatch(setSignOutState());
            navigate("/")
        })
        .catch((error) => error.message);
    }

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            })
        );
    };

  return (
    <Nav>
        <Link to='/Home'><Logo src='./images/logo.svg'/></Link>
        {
            (userName) ? (
                <>
                <NavMenu>
                    <a href='/Home'>
                        <img src='./images/home-icon.svg' alt='home'/>
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src='./images/search-icon.svg' alt='search'/>
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src='./images/watchlist-icon.svg' alt='watchlist'/>
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src='./images/original-icon.svg' alt='original'/>
                        <span>ORIGINAL</span>
                    </a>
                    <a>
                        <img src='./images/movie-icon.svg' alt='movie'/>
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src='./images/series-icon.svg' alt='series'/>
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <SignOut>
                    <UserImg src={userPhoto} alt={userName}/>
                    <Dropdown>
                        <span onClick={handleLogOut}>Log Out</span>
                    </Dropdown>
                </SignOut>  
                </>
            ) : (<Login onClick={handleSignIn}>Login</Login>)
        }
        
        
    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index: 3;
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

const Dropdown = styled.div`
    position: absolute;
    top: 60px;
    right: 30px;
    background:#162340;
    border-radius:2px;
    padding: 10px 25px;
    z-index:9;
    opacity: 0;

    &:hover{
        background: #0f1930;
    }
`
const SignOut = styled.div`
    cursor: pointer;
    &:hover{
        ${Dropdown}{
            opacity:1;
            transition-duration:500ms;
        }
    }
`
