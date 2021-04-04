import { React, useState } from "react";
import styled from "styled-components";
import LargeFlowImg from '../images/flow-img-1.svg';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { Link } from 'react-router-dom'

const PageContainer = styled.div `
    position: "relative";
`

const TopBar = styled.div `
position: absolute;
width: 1440px;
height: 35px;
width: 100%;
background: #D6441A;
transform: matrix(1, 0, 0, -1, 0, 0);
`;

const PageImg = styled.img `
    position: absolute;
    top:-30.8%;
    left: 0;
    height: 1000px;
`;

const MainHeading = styled.h1 `
    position: absolute;
    font-family: 'Rammetto One', cursive;
    font-size: 75px;
    top:10%;
    left: 10%;
    color: #1D39AD;
`

const TagLine = styled.h2 `
    position: absolute;
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    top:25%;
    left: 14%;
`;

const InfoContainer = styled.div `
    position: absolute;
    height: 400px;
    width: 600px;
    right: 4%;
    top: 25%;
    ${'' /* border: 1px solid black; */}
`;

const InfoWrapper = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
`


const Info = styled.p `
    margin: 0 auto;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    margin-bottom: 15px;
    text-align: center;
    margin-bottom: 35px;
    margin-top: -30px;
`;

const InfoList = styled.p `
    margin: 0 auto;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin-bottom: 15px;
    border-bottom: 3px solid #1D39AD;
`;

const Button = styled(Link) `
    margin-top: 30px;
    position: relative;
    background: #FFD447;
    border-radius: 20px;
    width: 350px;
    height: 50px;
    border-radius: 50px;
    background: #FFD447;
    white-space: nowrap;
    padding: 14px 48px;
    color: #1D39AD;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
        background: #1D39AD;
    }
`;

const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 24px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 24px;
`;


function Home() {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <PageContainer>
            <TopBar />
            <PageImg src={LargeFlowImg} type="image/svg"></PageImg>
            <MainHeading>INDAFLOW</MainHeading>
            <TagLine>The only way to get in da flow</TagLine>
            <InfoContainer>
                <InfoWrapper>
                    <Info>Productivity is hard. But let's make it easier. Introducing InDaFlow, a premier
                    productivity companion to help you get those annoying assignments done and out of the way with total ease.</Info>
                    <InfoList>No Registration Required</InfoList>
                    <InfoList>No Private Information Stored</InfoList>
                    <InfoList>Completely Free For The Rest Of Eternity!</InfoList>
                    

                    <Button onMouseEnter={onHover} onMouseLeave={onHover} to='/dashboard'>
                       Bring On The Flow {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </InfoWrapper>

            </InfoContainer>
        </PageContainer>
    );
}

export default Home;