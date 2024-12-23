import React, { useEffect, useState } from 'react';
import './About.css';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

const About = () => {
  const [studyAbroadImages, setStudyAbroadImages] = useState([]);

  useEffect(() => {
    const images = [
      { name: 'IMG_0669.jpeg', caption: 'Doha airpot in Qatar 🛃' },
      { name: 'IMG_8276.jpg', caption: '🚗' },
      { name: 'IMG_0398.jpeg', caption: '🦚 on a golf course un South Africa' },
      { name: 'IMG_0288.jpeg', caption: '⛳️' },
      { name: 'IMG_0083.jpeg', caption: '🏡' },
      { name: 'IMG_0256.jpeg', caption: 'South African coast' },
      { name: 'IMG_8519.jpg', caption: 'Cheetah 🐆' },
      { name: 'IMG_9161.jpg', caption: 'My street in Tanzania 🏠' },
      { name: 'IMG_8280.jpg', caption: 'Morning in the Serengeti 🌅' }
    ];
    setStudyAbroadImages(images);
  }, []);

  return (
    <div className="about-container">
      <section className="me-section">
        <h2>Me 🧍</h2>
        <div className="bio-content">
          <p>
          Hi, I’m Zach! Thanks for visiting my page. Below, you will find some information about me, 
          what I'm up to, and the things I love.
          </p>
          <p>
          I like …
          <ul>
        <li>Things that go fast (bikes, cars, skis, planes, etc.)</li>
        <li>The outdoors</li>
        <li>Sports with a ball</li>
        <li>Bagels</li>
        <li>Loud mechanical keyboards</li>
        <li>Learning new skills (like making this website)</li>
        <li>Music</li>
    </ul>
          </p>
          <p>
          I am currently a Data Scientist at ZAAZ Collective, where I design and implement AI-driven 
          workflow solutions, empowering companies to work faster and take greater ownership of their processes.
          </p>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-banner">
              <div className="skills-track">
                <div className="skill-group">
                  <div className="skill-item">Econometrics 📊</div>
                  <div className="skill-item">Machine Learning 🤖</div>
                  <div className="skill-item">Computer Vision 📸</div>
                  <div className="skill-item">Python</div>
                  <div className="skill-item">R 📊</div>
                  <div className="skill-item">SQL 🗄️</div>
                  <div className="skill-item">HTML 🌐</div>
                  <div className="skill-item">scikit-learn 🤖</div>
                  <div className="skill-item">Pandas 🐼</div>
                  <div className="skill-item">NumPy 🔢</div>
                  <div className="skill-item">Git 📝</div>
                </div>
                <div className="skill-group">
                <div className="skill-item">Econometrics 📊</div>
                  <div className="skill-item">Machine Learning 🤖</div>
                  <div className="skill-item">Computer Vision 📸</div>
                  <div className="skill-item">Python</div>
                  <div className="skill-item">R 📊</div>
                  <div className="skill-item">SQL 🗄️</div>
                  <div className="skill-item">HTML 🌐</div>
                  <div className="skill-item">scikit-learn 🤖</div>
                  <div className="skill-item">Pandas 🐼</div>
                  <div className="skill-item">NumPy 🔢</div>
                  <div className="skill-item">Git 📝</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hobbies">
            <h3>Hobbies & Interests</h3>
            <div className="hobbies-banner">
              <div className="hobbies-track">
                <div className="hobby-group">
                  <div className="hobby-item">Keyboards ⌨️</div>
                  <div className="hobby-item">Sking ⛷️</div>
                  <div className="hobby-item">Mounatin Biking 🚴‍♂️</div>
                  <div className="hobby-item">Simulator Racing 🏎️</div>
                  <div className="hobby-item">Planes 🛩️</div>
                  <div className="hobby-item">Cooking 👨‍🍳</div>
                  <div className="hobby-item">Golf 🏌️</div>
                  <div className="hobby-item">Tennis 🎾</div>
                  <div className="hobby-item">DJing 🎧</div>
                </div>
                <div className="hobby-group">
                <div className="hobby-item">Keyboards ⌨️</div>
                  <div className="hobby-item">Sking ⛷️</div>
                  <div className="hobby-item">Mounatin Biking 🚴‍♂️</div>
                  <div className="hobby-item">Simulator Racing 🏎️</div>
                  <div className="hobby-item">Planes 🛩️</div>
                  <div className="hobby-item">Cooking 👨‍🍳</div>
                  <div className="hobby-item">Golf 🏌️</div>
                  <div className="hobby-item">Tennis 🎾</div>
                  <div className="hobby-item">DJing 🎧</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
      </br>
      <section className="useful-links-section">
        <h2>Links 🔗</h2>
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
      </section>
<br>
</br>

      <section className="study-abroad-section">
        <h2>Study Abroad Tanzania & South Africa 🛫🇹🇿🇿🇦</h2>

        <div className="bio-content">
        <p>
        During the spring of 2022, I studied abroad in Tanzania and South Africa. 
        I spent the first few months living with a host family in Tanzania, then moved to Johannesburg, 
        South Africa, where I stayed with another family. I concluded my experience in Cape Town, 
        conducting an independent research project with the Kolisi Foundation that focused 
        on evaluating the efficacy of foreign aid programs in South Africa. It was an incredible and 
        transormative experience! Below are some pictures from the trip :)       
        </p>
        </div>

        <ImageCarousel images={studyAbroadImages} />
      </section>

      <br></br>

      <section className="bookshelf-section">
        <h2>My Bookshelf 📚</h2>
        <div className="bio-content">
          <p>
            Some books that I enjoy reading :)
          </p>
        </div>
        <div className="books-banner">
          <div className="books-track">
            <div className="book-group">
              <div className="book">
                <img src="/images/bookcovers/atomichabits.jpg" alt="Atomic Habits by James Clear" className="book-cover" />
                <div className="book-info">
                  <h3>Atomic Habits</h3>
                  <p>James Clear</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/thinkingfastandslow.jpg" alt="Thinking, Fast and Slow by Daniel Kahneman" className="book-cover" />
                <div className="book-info">
                  <h3>Thinking, Fast and Slow</h3>
                  <p>Daniel Kahneman</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/whitenoise.jpg" alt="White Noise by Don DeLillo" className="book-cover" />
                <div className="book-info">
                  <h3>White Noise</h3>
                  <p>Don DeLillo</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/TheUnbearableLightnessofbeing.jpg" alt="The Unbearable Lightness of Being by Milan Kundera" className="book-cover" />
                <div className="book-info">
                  <h3>The Unbearable Lightness of Being</h3>
                  <p>Milan Kundera</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/The%20vanishing%20half.jpg" alt="The Vanishing Half by Brit Bennett" className="book-cover" />
                <div className="book-info">
                  <h3>The Vanishing Half</h3>
                  <p>Brit Bennett</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/goodtogreat.jpg" alt="Good to Great by Jim Collins" className="book-cover" />
                <div className="book-info">
                  <h3>Good to Great</h3>
                  <p>Jim Collins</p>
                </div>
              </div>
            </div>
            <div className="book-group">
              <div className="book">
                <img src="/images/bookcovers/atomichabits.jpg" alt="Atomic Habits by James Clear" className="book-cover" />
                <div className="book-info">
                  <h3>Atomic Habits</h3>
                  <p>James Clear</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/thinkingfastandslow.jpg" alt="Thinking, Fast and Slow by Daniel Kahneman" className="book-cover" />
                <div className="book-info">
                  <h3>Thinking, Fast and Slow</h3>
                  <p>Daniel Kahneman</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/whitenoise.jpg" alt="White Noise by Don DeLillo" className="book-cover" />
                <div className="book-info">
                  <h3>White Noise</h3>
                  <p>Don DeLillo</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/TheUnbearableLightnessofbeing.jpg" alt="The Unbearable Lightness of Being by Milan Kundera" className="book-cover" />
                <div className="book-info">
                  <h3>The Unbearable Lightness of Being</h3>
                  <p>Milan Kundera</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/The%20vanishing%20half.jpg" alt="The Vanishing Half by Brit Bennett" className="book-cover" />
                <div className="book-info">
                  <h3>The Vanishing Half</h3>
                  <p>Brit Bennett</p>
                </div>
              </div>
              <div className="book">
                <img src="/images/bookcovers/goodtogreat.jpg" alt="Good to Great by Jim Collins" className="book-cover" />
                <div className="book-info">
                  <h3>Good to Great</h3>
                  <p>Jim Collins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
