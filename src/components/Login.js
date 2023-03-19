import React from 'react'
import styled from 'styled-components'


const Login = () => {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </CTA>

    </Container>
  )
}

export default Login;

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{
        background: url('../images/login-background.jpg');
        background-size:cover;
        opacity: 0.7;
        position: absolute;
        content:"";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
const CTA = styled.div`
    max-width:650px;
    padding: 80px 40px;
    width: 80%;
    display:flex;
    flex-direction: column;
    align-items: center;

    
`
const CTALogoOne= styled.img`

`
const SignUp = styled.a`
    background: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin: 12px 0;
    width: 100%;

    &:hover{
        background:#0483ee;
    }
`
const Description = styled.p`
    text-align: center;
    font-size: 10px;
    line-height:1.5;
    letter-spacing:1.5px;
    opacity: 0.8;
`
const CTALogoTwo = styled.img`
    width: 90%;
`