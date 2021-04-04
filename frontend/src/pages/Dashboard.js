import React from 'react';
import styled from 'styled-components';
import SmallFlowImg from '../images/flow-img-2.svg';
import { Link } from 'react-router-dom'
import ScribbleProImg from '../images/dashboard-scribble-pro.png';
import DoismImg from '../images/dashboard-doism.png';


const TopBar = styled.div `
position: absolute;
width: 1440px;
height: 35px;
width: 100%;
background: #1D39AD;
transform: matrix(1, 0, 0, -1, 0, 0);
`;

const PageImg = styled.img `
    position: absolute;
    top:-33%;
    z-index: 10;

    
`;


function Dashboard() {
    return (
        <>
            <TopBar />
            <PageImg src={SmallFlowImg} type="image/svg"></PageImg>

            <DashboardContainer>
            <DashboardWrapper>

                <Card1>

                    <CardHeading>
                        Learn
                    </CardHeading>

                    <CardImgv2 src="https://media.giphy.com/media/LpiVeIRgrqVsZJpM5H/source.gif"></CardImgv2>
                    
                    <CardFeaturesList2>
                        <CardFeature2>
                            You need to learn to learn before you can learn. Did that make sense?
                            Learning is not just about doing assignments, but its a process to understand
                            exactly how to get things done whilst understanding your work. This section aims to 
                            give you some tips and tricks.
                        </CardFeature2>
                    </CardFeaturesList2>

                    <CardButton>
                        <ViewCard3 to='/learn'>
                            Start Learning!
                        </ViewCard3>
                    </CardButton>
            
                </Card1>




                <Card2>

                    <CardHeading>
                        Flow
                    </CardHeading>

                    <CardImgv2 src="https://media.giphy.com/media/RkKuZpXTQ2vZISPrAd/source.gif"></CardImgv2>

                    <CardFeaturesList2>
                        <CardFeature3>
                            Once you've learnt how to learn, we can start putting it all into practice.
                            Staying concentrated on an assignment for long period of time is hard work. Lucky for 
                            us there are a few methods that make this work easier.
                        </CardFeature3>
                    </CardFeaturesList2>

                    <CardButton>
                        <ViewCard4 to='/flow'>
                            Start Flowing!
                        </ViewCard4>
                    </CardButton>

                    

                    
                </Card2>


                <Card3>

                    <CardHeading>
                        (dot)ism
                    </CardHeading>

                    <CardImg src={DoismImg} type="image/png"></CardImg>

                    <CardFeaturesList>
                        <CardFeature>
                            Want to keep track of things happening around you? Doism teach you the art of scribing.
                            Plan you day, your shopping, assignment using this sleek to-do-list.
                        </CardFeature>
                    </CardFeaturesList>

                    <CardButton>
                        <ViewCard1 to='/dot-ism'>
                            Start Dotting!
                        </ViewCard1>
                    </CardButton>

                    
                </Card3>


                <Card4>

                    <CardHeading>
                        ScribblePro  
                    </CardHeading>

                    <CardImg src={ScribbleProImg} type="image/png"></CardImg>

                    <CardFeaturesList>
                        <CardFeature>
                        Got something tickling your mind? Well head onto ScribblePro and scratch that itch.
                            Takes notes seemlessly for your assignments or for any random thought.
                        </CardFeature>
                    </CardFeaturesList>

                    <CardButton>
                        <ViewCard2 to='/scribble-pro'>
                            Start Scribbling!
                        </ViewCard2>
                    </CardButton>
                    
                </Card4>
            </DashboardWrapper>
        </DashboardContainer>
            




        </>
    );
}

export default Dashboard;






export const DashboardContainer = styled.div `
    display: flex;
    position: relative
`;

export const DashboardWrapper = styled.div`
    max-width: 1400px;
    display: grid;
    margin: 70px auto;
    grid-template-columns: 290px 290px 290px 290px;
    justify-content: center;
    align-items: center;
    grid-gap: 50px;
    position: relative;
    z-index: 100;

`;


export const Card1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #F3911D;
    align-items: center;
    border-radius: 10px;
    height: 600px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const Card2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #6A8D73;
    align-items: center;
    border-radius: 10px;
    height: 600px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const Card3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #8E64E9;
    align-items: center;
    border-radius: 10px;
    height: 600px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;


export const Card4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #D6441A;
    align-items: center;
    border-radius: 10px;
    height: 600px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    position: relative;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

// export const ServiceIcon = styled.div`
//     height: 25%;
//     font-size: 64px;
//     text-align: center;
//     margin-top: 20px;
//     color: #7fdeff;
// `;



export const CardHeading = styled.h2 `
    font-size: 2rem;
    color: #fff;
    ${'' /* margin-top: -20px;
    margin-bottom: 20px; */}
    text-align: center;
    font-family: 'Rammetto One', cursive; 
    margin-bottom: 15px;
`;

export const CardImg = styled.img `
    width: 225px;
    height: 225px;

`;

export const CardImgv2 = styled.img `
    position: relative;
    width: 225px;
    height: 225px;
    margin-top: -25%;


`;

export const CardFeaturesList = styled.ul `
    margin: 16px 5px;
    list-style: none;
    display: flex;
    flex-direction: column;
    color: #fff;
    height: auto;
    position: relative;
    ${'' /* align-items: center; */}
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
`;

export const CardFeaturesList2 = styled.ul `
    margin: -10px 5px;
    list-style: none;
    display: flex;
    flex-direction: column;
    color: #fff;
    height: auto;
    position: relative;
    ${'' /* align-items: center; */}
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
`;

export const CardFeature = styled.li `
    margin-bottom: 10px;
`;

export const CardFeature2 = styled.li `
    margin-top: -15px;
    margin-bottom: 20px;
`;

export const CardFeature3 = styled.li `
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const CardButton = styled.div`
    height: 10%;
    display: flex;
    position: relative;
    align-content: center;
    justify-content: center;
    top: 5px;
    ${'' /* bottom: 0; */}

`;

export const ViewCard1 = styled(Link)`
    display: flex;
    text-decoration: none;
    margin: 0 10px;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    background: #D6441A;
    border-radius: 20px;
    border-radius: 50px;
    white-space: nowrap;
    padding: 14px 48px;
    color: #fff;
    font-size: 15px;
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
        color: #fff;
        background: #1D39AD;
    }
`;


export const ViewCard2 = styled(Link)`
    display: flex;
    text-decoration: none;
    margin: 0 10px;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    background: #FFD447;
    border-radius: 20px;
    border-radius: 50px;
    white-space: nowrap;
    padding: 14px 48px;
    color: #1D39AD;
    font-size: 15px;
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
        color: #fff;
        background: #1D39AD;
    }
`;

export const ViewCard3 = styled(Link)`
    display: flex;
    text-decoration: none;
    margin: 0 10px;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    background: #6A8D73;;
    border-radius: 20px;
    border-radius: 50px;
    white-space: nowrap;
    padding: 14px 48px;
    color: #FFF;
    font-size: 15px;
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
        color: #fff;
        background: #1D39AD;
    }
`;


export const ViewCard4 = styled(Link)`
    display: flex;
    text-decoration: none;
    margin: 0 10px;
    font-weight: 700;
    font-size: 14px;
    position: relative;
    background: #8E64E9;
    border-radius: 20px;
    border-radius: 50px;
    white-space: nowrap;
    padding: 14px 48px;
    color: #FFF;
    font-size: 15px;
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
        color: #fff;
        background: #1D39AD;
    }
`;


