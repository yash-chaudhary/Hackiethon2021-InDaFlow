import { React, useState } from 'react';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import TimeManagementImg from '../images/time-management.svg';
import LearnToLearnImg from '../images/learn-to-learn.svg';
import NoteTakingImg from '../images/note-taking.svg';

const PageContainer = styled.div `
position: relative;
background: linear-gradient(to right top, #86b4f4, #00bfed, #00c5c4, #3ec285, #93b745);
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
min-height: 600px;
width: 1200px;
margin: 4% auto;
border-radius: 40px;
overflow: auto;
`;

const Button = styled.button `
    outline: none;
    border: ${({active}) => (active ? '5px solid #D6441A' : '5px solid #D6441A')};
    border-radius: 40px;
    font-size: 20px;
    padding: 12px 16px;
    color: ${({active}) => (active ? '#FFF' : '#D6441A')};
    background: ${({active}) => (active ? '#D6441A' : '#FFF')};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    max-height: 64px;


    &:hover {
        color: #FFF;
        background: #D6441A;
    }
`;

const BtnImg = styled.div `
display: flex;
flex-direction: column;
`;

const ButtonParaContainer = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 5%;
    margin-left: 5%;
    font-family: 'Poppins', sans-serif;
`;

const ButtonParaGroup = styled.div `
    display: flex;
    position: relative;
    margin-bottom: 7%;
    max-height: 500px;
`;

const InfoContainer = styled.div `
    position: relative;
    margin-left: 5%;
    ${'' /* background: gray; */}
    width: 70%;
    border-radius: 40px;
`;

const ParaHeading = styled.h5 `
position: relative;
padding-left: 5%;
padding-right: 5%;
padding-top: 2%;
font-size: 24px;

    
`
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

const ParaContentList = styled.ul `
position: relative;
padding-left: 7%;
padding-right: 5%;
font-size: 14px;
font-weight: 300;
margin-bottom:2%;
`;


const ParaBlock = styled.div `
position: relative;
margin-left: 5%;
background: #F3911D;
width: 90%;
height:150px;
border-radius: 40px;
margin-bottom: 3%;
`

const ParaQuote = styled.p `
font-weight: 500;
font-style: italic;
padding-top: 3%;
padding-left: 8%;
padding-right: 5%;
font-size: 25px;
color: #fff;
`

const ContentImg = styled.img `
display: flex;
flex-direction: column;
position: relative;
width: 250px;
height: 250px;
top: 17%;
left: 0;
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`
const BackToHome = styled(Link)`
  position: absolute;
  right: 15%;
  top: 8%;
  font-size:40px;
  color: white;
`;

function Learn() {

    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const [button4, setButton4] = useState(false)

    function handleClickBtn1() {
        setButton1(!button1)
        
    }
    function handleClickBtn2() {
        setButton2(!button2)
    }
    function handleClickBtn3() {
        setButton3(!button3)
       
    }
    function handleClickBtn4() {
        setButton4(!button4)
    
    }

    
    return (
        <>
        <PageContainer>

            <PageTitle>Learning to Learn</PageTitle>

            <BackToHome to='/dashboard'>
                <AiFillHome />
            </BackToHome>

            <PageWrapper>


            <ButtonParaContainer>
            
            <ButtonParaGroup>
            <BtnImg>
            <Button onClick={handleClickBtn1} active={button1}>
                Time Management
            </Button>
            {button1?<ContentImg src={TimeManagementImg} type="image/svg"></ContentImg>:null}
            </BtnImg>
            
            {button1?
                
            <InfoContainer>
                <ParaSubHeading>
                Managing Your Time
                </ParaSubHeading>
                
                <ParaContent>
                Time is a resource much like money- it can be saved, and it can be spent. Once it has been used, it is gone forever! One of the most important things that can be mastered in life is being able to effectively manage the time that we have. 
                </ParaContent>

                <ParaContent>
                There are important things to consider when managing our time. Setting long and short term goals is one aspect that can help us to focus our time. Another is prioritising, or being able to decide which tasks are urgent, important, not urgent and not important in order to decide which ones need to be completed first. It’s not uncommon to spend hours on a task that is really not important, but then leave yourself short on time to complete another task that is important by it’s deadline! 
                </ParaContent>
                
                <ParaContent>
                To create goals and prioritise well means we also need to be really organised. This might mean keeping our work area tidy and having all the things we need on hand, or it could mean utilising important tools such as calendars and to do lists to keep our tasks and deadlines organised and clear.
                </ParaContent>

                <ParaContent>
                The final thing to remember in becoming a master of time management is to build in time to look after you! That means getting enough sleep, drinking  water and eating well, getting physical exercise and having short breaks during your work time. 
                </ParaContent>

            </InfoContainer>
            
            : null}

            </ButtonParaGroup>

            
            


            <ButtonParaGroup>
            <BtnImg>
            <Button onClick={handleClickBtn2} active={button2}>
                Learn to Learn
            </Button>
            {button2?<ContentImg src={LearnToLearnImg} type="image/svg"></ContentImg>:null}
            </BtnImg>

            {button2?
                <InfoContainer>
                <ParaSubHeading>
                How can you learn more effectively?
                </ParaSubHeading>
                
                <ParaContent>
                Time is a resource much like money- it can be saved, and it can be spent. Once it has been used, it is gone forever! One of the most important things that can be mastered in life is being able to effectively manage the time that we have. 
                </ParaContent>

                <ParaBlock>

                <ParaQuote>
                Aliquam etiam erat velit scelerisque in. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.abore et dolore magna aliqua. 
                </ParaQuote>
                    
                </ParaBlock>

                
                
                <ParaContent>
                To create goals and prioritise well means we also need to be really organised. This might mean keeping our work area tidy and having all the things we need on hand, or it could mean utilising important tools such as calendars and to do lists to keep our tasks and deadlines organised and clear.
                </ParaContent>

                <ParaContent>
                The final thing to remember in becoming a master of time management is to build in time to look after you! That means getting enough sleep, drinking  water and eating well, getting physical exercise and having short breaks during your work time. 
                </ParaContent>
                

            </InfoContainer>

            : null}
            </ButtonParaGroup>

            

            <ButtonParaGroup>
            <BtnImg>
            <Button onClick={handleClickBtn3} active={button3}>
                Art of Note-taking
            </Button>
            {button3?<ContentImg src={NoteTakingImg} type="image/svg"></ContentImg>:null}
            </BtnImg>

            {button3?
                <InfoContainer>
                <ParaSubHeading>
                How can you learn more effectively?
                </ParaSubHeading>
                
                <ParaContent>
                There’s a good chance that you have heard about note taking, and also a very good chance that you haven’t been taught how to take GOOD notes. It’s not just about writing down all the information- the purpose of note taking is to help you to remember the important information, and be able to quickly find it again later, as well as review it to help you learn it better. 

                </ParaContent>

                <ParaContent>
                To create goals and prioritise well means we also need to be really organised. This might mean So how DO you take good notes? There is actually not one set way, though there is a lot of research that suggests using pen and paper does help you to remember more. The best way to take good notes depends on the information as well as the learner. Sometimes dot points in a list may be useful. Sometimes using pictures, diagrams and colours is a better option. It is best to learn a few methods that you like and can rely on for different situations, like those covered in the links provided. 
                </ParaContent>

                <ParaContent>
                The most important things to remember are:
                </ParaContent>
                
                <ParaContentList>
                    <li>
                    It’s not about writing down every single word, but just the important things!
                    </li>
                    <li>
                    There is no right or wrong way- the best method is the one that best helps you to remember the information you need. 
                    </li>
                    <li>
                    Creating shortcuts in your notes is very helpful
                    </li>
                    <li>
                    You need to take time to read your notes after you have written them
                    </li>
                </ParaContentList>

                
                
        
            







      
                

            </InfoContainer>

            : null}
            </ButtonParaGroup>


       
            </ButtonParaContainer>

                

            </PageWrapper>
            

        </PageContainer>
        </>
    )
}

export default Learn;






// ----------------------------- Trying to make cleaner code (can ignore) ----------------------------

// const Button = styled.button `
//     outline: none;
//     border: ${({active}) => (active ? '5px solid #D6441A' : '5px solid #D6441A')};
//     border-radius: 40px;
//     font-size: 20px;
//     padding: 12px 16px;
//     color: ${({active}) => (active ? '#FFF' : '#D6441A')};
//     background: ${({active}) => (active ? '#D6441A' : '#FFF')};
//     font-family: 'Poppins', sans-serif;
//     font-weight: 500;

//     &:hover {
//         color: #FFF;
//         background: #D6441A;
//     }
// `;

// const ActivePara = styled.p `
//     font-family: 'Poppins', sans-serif;
//     font-weight: 500;
//     font-size: 16px;
//     color: ${({active}) => (active ? '#000' : '#FFF')};
    

// `;



// const types = [{id: 'Time management', names: ['jeff', 'tim', 'bob']}, {id: 'Efficiency', names: ['vee', 'loo', 'poo']}];

// function ToggleGroup() {
//     const [active, setActive] = useState(types[0]);
//     const [activePara, setActivePara] = useState(types[0][names].map((name, i) => (<p>{name}</p>)))

//     return (
//         <p>
//         <div>
//             {types.map((elements, index) => (
//                 <>
//                 <Button key={index} active={active === elements} onClick={() => setActive(elements)}>
//                     {elements.id}
//                 </Button>

//                 if()

//                     {elements.names.map((name, i) => (
//                         <p key={i}>
//                             {name}
//                         </p>

//                     ))}
               


                
//                 </>
//             ))}
//         </div>
        
        // {/* <div>
        //     Names are:
        //     {elements.names.map((name, i) => (
        //         <p key={i}>
        //             {name}
        //         </p>
        //     ))}
        // </div> */}
        
//         </p>
//     );
// }


// const types = ['Cash', 'Credit Card', 'Bitcoin']

// function ToggleGroup() {
//     const [active, setActive] = useState(types[0]);

//     return (
//         <>
//         <div>
//             {types.map(type => (
//                 <Button active={active === type} onClick={() => setActive(type)}>
//                     {type}
//                 </Button>
//             ))}
//         </div>

//         <p>Your payment is: {active}</p>
//         </>
//     );
// }

