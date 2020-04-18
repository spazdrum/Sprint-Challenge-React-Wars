// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const AppDiv = styled.div`
display: flex;
justify-content: space-around;
`

const Appsection = styled.section`
width: 30%;
padding-left: 10px;
background-color: #ffffff33;
border-radius: 8px;
box-sizing: border-box;
margin: 20px 0;
text-align: left;
`

const AppH3Style = styled.h3`
text-align: center;
padding-bottom: 20px;
padding-top: 10px;
`

function Characters (props) {
    return (
        <AppDiv>
            <Appsection>
                <AppH3Style>Name: {props.name}</AppH3Style>
                <h3>Height: {props.height}</h3>
                <h3>Mass: {props.mass}</h3>
                <h3>Hair Color: {props.hair}</h3>
                <h3>Skin Color: {props.skin}</h3>
            </Appsection>
        </AppDiv>
    );
};

export default Characters;