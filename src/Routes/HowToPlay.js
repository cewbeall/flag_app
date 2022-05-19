import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react'
import "../Style/how_to_style.css"

const HowToPlay = () => {

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            <div class="heading">
                <h4><Link to="/">Back</Link></h4>
                <div class="instructions">
                    <h1>How to Play:</h1>
                    <ol>
                        <li>If you think you know the answer, enter the name of a country</li>
                        <li>To check if your answer is right, click "Check"</li>
                            <ul>
                                <li>If it is correct, your streak will increase by 1</li>
                                <li>If it is incorrect, your streak will reset to 0</li>
                                <li>Your best streak will be kept track of</li>
                            </ul>
                        <li>If you do not know the answer, and would like to know what it is, click "Reveal Answer"</li>
                            <ul>
                                <li>Revealing the answer will reset your current streak to 0</li>
                            </ul>
                        <li>If you do not know the answer, but would like to protect your streak, clicking "Next Flag" will not reset your streak</li>
                        <li>You may always click "Next Flag" to move on to another flag</li>
                    </ol>
                </div>
                <h4></h4>
            </div>
            
            
            
        </div>
    )
}

export default HowToPlay