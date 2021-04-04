import React, { useState } from "react";
import Items from "./Items";
import NewListItem from "./NewListItem";
import './DOismstyles.css';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';

import { Link } from 'react-router-dom';


const BackGround = styled.div `
    position: absolute;
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    min-height: 800px;
    max-height: 2000px;
    width: 100%;
    z-index: -1;
`;
const BackToHome = styled(Link)`
  position: fixed;
  right: 5%;
  top: 8%;
  font-size:40px;
  color: white;
`;

const Heading = styled.div `
margin-top: 5%;
  z-index: 10;
  width: 400px;
  padding: 10px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  background: white;
  border-radius: 5px;
  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-weight: 600;
  color: #A683E3;
`;


const MainHeading = styled.h1 `
position: relative;
font-family: 'Poppins', sans-serif;
color: #fff;
padding-top: 2%;
padding-left: 2%;
font-size: 48px;



`;

const Tagline = styled.h2 `
 font-family: 'Poppins', sans-serif;
 margin: 0 auto;
 position: relative;
 padding-left: 2%;
color: #fff;


`;



function Index() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  var today = new Date();

  /* condensed date method */
  var options = {
      weekday: "long",
      month: "long",
      day: "numeric"
  }

  var day = today.toLocaleDateString("en-US", options)




  return (
    <>
    <BackGround>

    <MainHeading>
    (dot)ism
    </MainHeading>

    <Tagline>
    The art of proper checklists
    </Tagline>
    
    <Heading>
        {day}
        <BackToHome to='/dashboard'>
          <AiFillHome />
      </BackToHome>
    </Heading>
    

    <div className="box">
      <NewListItem onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Items
            key={index}
            id={index}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
    </BackGround>
    </>
 
  );
}

export default Index;
