import React, { Component } from 'react';
import { Waypoint } from 'react-waypoint';

import eventBusService from '../../services/eventBusService.js';
import PortfolioList from './PortfolioList';
import span from '../../imgs/span.png';
import taskflow from '../../imgs/Taskflow.PNG';
import noteApp from '../../imgs/React-note-app.PNG';
import biskits from '../../imgs/Biskits.PNG';
import appsus from '../../imgs/appsus.PNG';
import memegen from '../../imgs/memegen.PNG';

export default class Portfolio extends Component {
  state = {
    portfolio: [
      {
        id: 1,
        title: 'taskflow',
        desc:
          'Project management system like trello with VueJS, node.js,MongoDB, socket.io and drag n drop',
        img: taskflow,
        website: 'http://taskflo.herokuapp.com/',
      },
      {
        id: 2,
        title: 'noteApp',
        desc:
          'End to end note application build with React, Redux, NodeJS, MongoDB and Sass.MVC architecture and full CRUD.',
        img: noteApp,
        website: 'https://hidden-refuge-74609.herokuapp.com',
      },
      {
        id: 3,
        title: 'Biskits',
        desc: 'Nuxt JS project with vuex and firebase',
        img: biskits,
        website: 'https://eloquent-lovelace-36b532.netlify.com',
      },
      {
        id: 4,
        title: 'AppSus',
        desc: 'Email and Note include one app like google keep and gmail with VueJS',
        img: appsus,
        website: 'https://natan-git.github.io/AppSus-VueJS/',
      },
      {
        id: 5,
        title: 'meme generator',
        desc: 'Meme generator app with canvas built with vanilla js.',
        img: memegen,
        website: 'https://natan-git.github.io/Meme-generator-app/',
      },
    ],
  };
  handleEnter = (link) => {
    eventBusService.emit('scrolling', link);
  };
  render() {
    return (
      <Waypoint
        fireOnRapidScroll={false}
        scrollableAncestor={window}
        bottomOffset="80%"
        topOffset="15%"
        onEnter={this.handleEnter.bind(null, 'portfolio')}
      >
        <section
          id="portfolio"
          className="portfolio container flex column align-center"
        >
          <h2 className="titles">my recent works</h2>
          <img className="underline" src={span} alt={span} width="60" />
          <PortfolioList portfolio={this.state.portfolio} />
        </section>
      </Waypoint>
    );
  }
}
