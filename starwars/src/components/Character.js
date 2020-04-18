// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    )
}

export default Characters;