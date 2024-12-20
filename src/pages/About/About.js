import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>Some sites and tools I find useful</h2>
      
      <table>
        <thead>
          <tr>
            <th>Site</th>
            <th>Note</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="icon-cell">
              Kaggle <img src={`${process.env.PUBLIC_URL}/images/kagicon.png`} alt="KAGGLE" />
            </td>
            <td>An incredible, FREE online Data Science learning platform. They offer introductory courses such as Intro to Python and more advanced classes like machine learning.</td>
            <td><a href="https://www.kaggle.com/learn" target="_blank" rel="noopener noreferrer">KAGGLE</a></td>
          </tr>
          <tr>
            <td className="icon-cell">
              Keybr <img src={`${process.env.PUBLIC_URL}/images/cover.png`} alt="KEYBR" />
            </td>
            <td>An online touch typing practice page. I'm trying to teach myself to type faster and properly. Keybr is FREE and a fantastic way to practice. You can track my progress to see how much I suck at typing properly.</td>
            <td><a href="https://www.keybr.com/profile/p4b6ml1" target="_blank" rel="noopener noreferrer">MY PROFILE</a></td>
          </tr>
          <tr>
            <td className="icon-cell">
              Monkeytype <img src={`${process.env.PUBLIC_URL}/images/monkeytype.png`} alt="Monkey" />
            </td>
            <td>Another great online typing page with tons of customizable options.</td>
            <td><a href="https://monkeytype.com/" target="_blank" rel="noopener noreferrer">MONKEYTYPE</a></td>
          </tr>
          <tr>
            <td className="icon-cell">
              <img src={`${process.env.PUBLIC_URL}/images/cb.png`} alt="cb" />
            </td>
            <td>Has great FREE practice problems in Python and Java for all skill levels.</td>
            <td><a href="https://codingbat.com/python" target="_blank" rel="noopener noreferrer">CODINGBAT</a></td>
          </tr>
          <tr>
            <td className="icon-cell">
              <img src={`${process.env.PUBLIC_URL}/images/spoticon.png`} alt="Spot" />
            </td>
            <td>Not sure why you would be interested in my music taste, but if you are here's a link</td>
            <td><a href="https://open.spotify.com/user/zroc1000?si=9d0f5467153a4228" target="_blank" rel="noopener noreferrer">SPOTIFY</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default About;
