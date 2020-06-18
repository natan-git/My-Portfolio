import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint';

import eventBusService from "../../services/eventBusService.js";
import span from '../../imgs/span.png'
import SkillList from './SkillList'
export default class Skills extends Component {

    handleEnter = (link) => {
        eventBusService.emit('scrolling' , link);
    }
    state = {
        skills: [{ skill: 'html', precent: 85 },
        { skill: 'css', precent: 85 },
        { skill: 'java script', precent: 90 },
        { skill: 'react', precent: 85 },
        { skill: 'vuejs', precent: 60 },
        { skill: 'angular', precent: 55 },
        { skill: 'node.js', precent: 70 },
        { skill: 'mongodb', precent: 76 },
        ]
    }
    render() {
        return (
            <Waypoint 
            fireOnRapidScroll={false}
            scrollableAncestor={window}
            bottomOffset='80%'
            topOffset='25%'
            onEnter={this.handleEnter.bind(null,'skills')}>
                <section id="skills"  className="skills">
                    <div  className=" flex column align-center container">
                    <h2 className="titles">Skills</h2>
                    <img className="underline" src={span} alt={span} width="60" />
                    <SkillList skills={this.state.skills} />
                    </div>
                    
                </section>
            </Waypoint>
        )
    }
}
