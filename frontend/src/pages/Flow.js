import { React, useState } from "react";
import styled from "styled-components";
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import { FiMinusCircle } from 'react-icons/fi';
// import Break from './Break.jsx';


const BackToHome = styled(Link)`
  position: absolute;
  right: 15%;
  top: 8%;
  font-size:40px;
  color: white;
`;

const PageContainer = styled.div `
position: relative;
background: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
height: 100vh;
overflow: auto;
font-family: 'Poppins', sans-serif;
`;

const PageTitle = styled.h1 `
    position: relative;
    color: #FFF;
    overflow: auto;
    border-bottom: 5px solid #1D39AD;
    margin: 3% 500px;
    text-align: center;
    font-size: 48px;
`;


const PageWrapper = styled.div `
position: relative;
background: #ffffff;
min-height: 727.953px;
width: 1200px;
margin: 3% auto;
border-radius: 40px;
overflow: auto;

`;

const Button = styled.button `
    display: flex;
    outline: none;
    border: ${({active}) => (active ? '5px solid #F3911D' : '5px solid #F3911D')};
    border-radius: 40px;
    font-size: 16px;
    padding: 10px 12px;
    color: ${({active}) => (active ? '#FFF' : '#F3911D')};
    background: ${({active}) => (active ? '#F3911D' : '#FFF')};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    max-height: 64px;
    wrap: row-wrap;
    margin: 5px 5px;


    &:hover {
        color: #FFF;
        background: #F3911D;
    }
`;



const ButtonGroup = styled.div `
    display: flex;
    position: relative;
    margin-top: 2%;
    margin-left: 5%;
    font-family: 'Poppins', sans-serif;
    flex-wrap: wrap;
    ${'' /* background: gray; */}
    width: 45%;
    border-right: 5px solid #F3911D;
`;


const ButtonParaContainer = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 2%;
`;



const TimerContainer = styled.div `
position: absolute;
width: 50%;
height: 600px;
${'' /* background: gray; */}
right: 0;
top: 10%;
`;



// const ButtonParaGroup = styled.div `
//     display: flex;
//     position: relative;
//     margin-bottom: 7%;
//     max-height: 500px;
// `;

const InfoContainer = styled.div `
    position: relative;
    margin-left: 5%;
    ${'' /* background: gray; */}
    width: 45%;
    border-right: 5px solid #F3911D;
`;



const ParaHeading = styled.h5 `
position: relative;
padding-left: 5%;
padding-right: 5%;
padding-top: 2%;
font-size: 24px; 
`;

const ParaSubHeading = styled.h6 `
position: relative;
padding-left: 5%;
padding-right: 5%;
font-size: 16px;
`;

const ParaContent = styled.p `
position: relative;
padding-left: 5%;
padding-right: 5%;
font-size: 14px;
font-weight: 300;
margin-bottom:2%;
`;

const ParaContentList = styled.ol `
position: relative;
padding-left: 5%;
padding-right: 5%;
margin-left: 3%;
font-size: 14px;
font-weight: 300;
margin-bottom:2%;
`;

const ParaContentListUL = styled.ul `
position: relative;
padding-left: 5%;
padding-right: 5%;
margin-left: 3%;
font-size: 14px;
font-weight: 300;
margin-bottom:2%;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;




function Flow() {

    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const [button4, setButton4] = useState(false)

    function handleClickBtn1() {
        setButton1(!button1)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        
    }
    function handleClickBtn2() {
        setButton2(!button2)
        setButton1(false)
        setButton3(false)
        setButton4(false)
    }
    function handleClickBtn3() {
        setButton3(!button3)
        setButton2(false)
        setButton1(false)
        setButton4(false)
    }
    function handleClickBtn4() {
        setButton4(!button4)
        setButton2(false)
        setButton3(false)
        setButton1(false)
    }

    //--------------------------- Timer Functionality ---------------------------------------

    

    //----------------------------------------------------------------------------------------

    return (
        <>
        <PageContainer>

            <PageTitle>Study Techniques</PageTitle>

            <BackToHome to='/dashboard'>
                <AiFillHome />
            </BackToHome>

            <PageWrapper>

            <TimerContainer>
                
            <ImgWrap>
            <iframe src="https://beepmyclock.com/widget/timer" frameborder="0" style={{border:0,height:"175px"}}></iframe>
            </ImgWrap>
            
            </TimerContainer>


            <ButtonParaContainer>
            <ButtonGroup>

            <Button onClick={handleClickBtn1} active={button1}>
                Pomodoro
            </Button>

            <Button onClick={handleClickBtn2} active={button2}>
                80/20
            </Button>

            <Button onClick={handleClickBtn3} active={button3}>
                SMART
            </Button>
            
            <Button onClick={handleClickBtn4} active={button4}>
                Eat That Frog
            </Button>

            </ButtonGroup>


            <InfoContainer>
            {button1?
                <>
                    <ParaHeading>
                    Pomodoro Technique
                    </ParaHeading>

                    <ParaContent>
                    The Pomodoro Technique is a method to work for 25-minutes, then break for 5. This simple method can be broken down into four easy aspects below. t
                    </ParaContent> 

                    <ParaContentList>
                        <li>
                            <ParaSubHeading>
                                Effort
                            </ParaSubHeading>
                        </li>
                        <ParaContent>
                        This can be done at the start of the day for long term goals or right before you start a session for shorter ones.
                        </ParaContent>

                        <li>
                            <ParaSubHeading>
                            	Timing
                            </ParaSubHeading>
                        </li>
                            <ParaContent>
                            This is where the individual evaluates how much time they want their intervals of work to be. 25-minutes is recommended but 90-minutes is supposedly more natural for concentration. 
                            </ParaContent>

                            <li>
                            <ParaSubHeading>
                            	Breaks
                            </ParaSubHeading>
                        </li>
                            <ParaContent>
                            Vary the amount of time spent having a break, so brain doesn’t get complacent and reduces to guilt if you get distracted. Recommended that after 4 work intervals take a longer break, to designate a reward for the work completed and to reset your concentration.
                            </ParaContent>

                            <li>
                            <ParaSubHeading>
                            	Interruptions
                            </ParaSubHeading>
                        </li>
                            <ParaContent>
                            It’s important to identify what we get distracted by. Interruptions may be created by ourselves, by overthinking something or being reminded of other important tasks. It’s important to observe these thoughts, write them down before moving back to your current activity. External distractions can also be delt with in the same way.
                            </ParaContent>

                    </ParaContentList>
                </>
                
                : null}

                {button2?
                <>
                    <ParaHeading>
                    80/20 Rule
                    </ParaHeading>

                    <ParaContent>
                    The 80/20 rule comes from the idea that 80% of results come from just 20% of action. But that’s a bit complicated, so let’s break it down. Let’s look at it in terms of work and study. You get the most benefit and useful results, the 80%, from only 20% of what you do. This method is based on the theory that if you work smarter by using methods to study like answering questions, you’ll get that 80% of results while only spending 20% of your time on it. 
                    </ParaContent> 

                    <ParaContent>
                    Indaflow has some resources to help you study smarter, not harder, but to make it easier here are some quick suggestions!
                    </ParaContent>
                    <ParaContentListUL>
                        <li>
                        Make sure to use revision questions and go over them later even after you work them out. This will improve your ability and speed when completing tasks, as well as ensuring you have learnt something from the task.
                        </li>

                        <li>
                        Information usually takes 30 minuets to be consolidated into long term memory, so don’t try and cram anything an hour before the exam. Spread your learning out over weeks and even months for larger assessments, going over the material multiple times for better results.
                        </li>
                    </ParaContentListUL>

                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    
                </>
                
                : null}

                {button3?
                <>
                    <ParaHeading>
                    SMART Goals
                    </ParaHeading>

                    <ParaContent>
                    SMART goals is a time management strategy used to make sure what you aim to complete, whether its schoolwork, exam revision or personal goals, is achieved in an efficient way. 
                    </ParaContent>

                    <ParaContentList>
                        <li>
                            <ParaSubHeading>
                             Specific
                            </ParaSubHeading>
                        </li>
                        <ParaContent>
                        Means that your goal cannot be broad, instead defined in ways that are unique to you. 


                        </ParaContent>

                        <li>
                            <ParaSubHeading>
                            Measurable
                            </ParaSubHeading>
                        </li>
                            <ParaContent>
                            Means that the goal should have an indicator of progress such as topics covered, or questions completed successfully. 
                            </ParaContent>

                            <li>
                            <ParaSubHeading>
                            Attainable
                            </ParaSubHeading>
                        </li>
                            <ParaContent>
                            Means that your goal must be reasonable and within your grasp. SMART goals are not about pushing boundaries but rather improving what you already have. 
                            </ParaContent>

                            <li>
                            <ParaSubHeading>
                            Relevant
                            </ParaSubHeading>
                        </li>
                            <ParaContent>
                            Means that this SMART goal must be within your larger vision, plan, or organisation if in a business sense. 

                            </ParaContent>

                            <li>
                            <ParaSubHeading>
                            Time based 
                            </ParaSubHeading>
                        </li>
                            <ParaContent>
                            Means that the goal has to have a timeframe, whether its 3 months or 2 weeks. Place a time frame or a deadline to inspire motivation. Make sure it’s realistic so you don’t get discouraged.
                            </ParaContent>


                    </ParaContentList>
                
                    </>
                
                : null}

                    {button4?
                <>

                <ParaHeading>
                    Eat that Frog
                    </ParaHeading>
                    <ParaContent>
                    Eat the frog may sound strange, but it’s an effective tool to help work efficiently. In simple words, tackle the task that you want to do the least and have the least motivation for first. It’s those tasks that you find yourself procrastinating the most, leaving to the end of the day to complete which eat the frog is about. 
                    </ParaContent>

                    <ParaContent>
                    The most difficult part of this strategy is working out what is the worst task on your to do list and actually starting it. Often people procrastinate because they are afraid of failure or not doing well, so they neglect the task to save their feelings and self-esteem, which is based in age old survival instincts. However, we are not fighting for our survival anymore, instead its grades. Once you start that task, everything gets easier from there. 
                    </ParaContent>


                    <ParaContent>
                    It’s recommended that you list your tasks from hardest to easiest, in bite sized chunks, that way it’s easier to digest. Plus, you feel accomplished because the hardest task is out of the way, which has a bonus of motivating you to complete the following tasks.
                    </ParaContent>


                    <ParaContent>
                    Final tip: Don’t wait too long to start or you’ll just get more and more unmotivated. Start before you convince yourself it’s too hard.
                    </ParaContent>  

                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                    <ParaContent>
                        &nbsp;
                    </ParaContent>
                </>
                
                : null}

            </InfoContainer>




            </ButtonParaContainer>


        

            </PageWrapper>
            

        </PageContainer>
        </>
    );
}

export default Flow;











