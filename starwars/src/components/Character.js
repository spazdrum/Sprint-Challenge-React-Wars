// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const section = styled.div`
width: 30%;
padding: 2%;
background-color: red;
border-radius: 8px;
box-sizing: border-box;
margin: 20px 0;
`

function Characters (props) {
    return (
        <div>
            <section>
                <h3>Name: {props.name}</h3>
                <h3>Height: {props.height}</h3>
                <h3>Mass: {props.mass}</h3>
                <h3>Hair Color: {props.hair}</h3>
                <h3>Skin Color: {props.skin}</h3>
            </section>
        </div>
    );
};

export default Characters;