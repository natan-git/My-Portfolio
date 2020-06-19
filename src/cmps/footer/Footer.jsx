import React, { Component } from 'react'
import Elevator from 'elevator.js'

import IconList from './IconList'

export default class Footer extends Component {
    state = {
        icons: [
            {
                name: 'icon-facebook',
                link: 'https://www.facebook.com/natan.yagodayv/'
            },
            {
                name: 'icon-linkedin2',
                link: 'https://www.linkedin.com/in/natan-yagodayv/'
            },
            {
                name: 'icon-git',
                link: 'https://github.com/natan-git'
            }
        ]
    }
    move=(link)=>{
        link = '#' + link
        let elevator = new Elevator({
            targetElement: document.querySelector(link),
        });
        elevator.elevate()
    }
    render() {
        return (
            <footer className="footer">
                <div className="container flex align-center justify-space-between">
                    <IconList icons={this.state.icons} />
                    <div 
                    onClick={this.move.bind(null,'home')}
                    className="circule flex align-center justify-center">
                        <span className="icon-long-arrow-up"></span>
                    </div>
                </div>


            </footer>
        )
    }
}
