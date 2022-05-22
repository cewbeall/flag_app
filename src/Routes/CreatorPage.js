import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react'
import "../Style/creator_style.css"

const Creator = () => {

    let githubLink = "https://github.com/cewbeall/flag_app.git"
    let linkedinLink = "https://www.linkedin.com/in/charlie-beall/"
    let apiLink = "https://www.countryflagsapi.com/"

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
            
            <h4><Link to="/">Back</Link></h4>
            <div class="creatorHeading">    
                <h1>Credits</h1>
            </div>
            <div class="credits">
                <h3>Created by Charlie Beall</h3>
                <div class="creatorLinks">
                    <h3><a href={githubLink}>Github</a></h3>
                    <h3><a href={linkedinLink}>LinkedIn</a></h3>
                    <h3><a href={apiLink}>Flag API</a></h3>
                </div>
            </div>
            
        </div>
    )
}

export default Creator