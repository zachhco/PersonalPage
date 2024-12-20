import React, { useEffect } from 'react';
import './FloatedZeus.css';

const FloatedZeus = () => {
  useEffect(() => {
    // Store the original favicon
    const originalFavicon = document.querySelector("link[rel*='icon']");
    const originalHref = originalFavicon ? originalFavicon.href : '';

    // Add dark theme class when component mounts
    document.body.classList.add('dark-theme-wrapper');

    // Change favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = `${process.env.PUBLIC_URL}/floatedzeus-favicon.png`;
    document.getElementsByTagName('head')[0].appendChild(link);
    
    // Cleanup function to restore original favicon and remove dark theme
    return () => {
      document.body.classList.remove('dark-theme-wrapper');
      if (originalHref) {
        link.href = originalHref;
      }
    };
  }, []);

  return (
    <div className="floatedzeus-container">
      <h2>This is not FloatedZeus</h2>
      hi

      <div className="visual-players">

      <div className="visual-player">
          <iframe 
            width="100%" 
            height="300" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1725885192&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="Minimal Deep Mix - Visual Player"
          />
          <div className="player-info">
            <a href="https://soundcloud.com/zach-cohen-37098677" title="FloatedZeus" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>FloatedZeus</a>
            {' · '}
            <a href="https://soundcloud.com/zach-cohen-37098677/minimal-deep-mix-floatedzeus" title="Minimal Deep Mix - FloatedZeus" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Minimal Deep Mix - FloatedZeus</a>
          </div>
        </div>
        <div className="visual-player">
          <iframe 
            width="100%" 
            height="300" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1789336879&color=%233c743c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="House Party Mix - Visual Player"
          />
          <div className="player-info">
            <a href="https://soundcloud.com/zach-cohen-37098677" title="FloatedZeus" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>FloatedZeus</a>
            {' · '}
            <a href="https://soundcloud.com/zach-cohen-37098677/floated-zeus-house-party-mix-the-matrix" title="House Party Mix - FloatedZeus - The Matrix" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>House Party Mix - FloatedZeus - The Matrix</a>
          </div>
        </div>

        <div className="visual-player">
          <iframe 
            width="100%" 
            height="300" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1718730633&color=%23684420&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="Organic House Mix - Visual Player"
          />
          <div className="player-info">
            <a href="https://soundcloud.com/zach-cohen-37098677" title="FloatedZeus" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>FloatedZeus</a>
            {' · '}
            <a href="https://soundcloud.com/zach-cohen-37098677/organic-house-mix" title="Organic House Mix - FloatedZeus" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>Organic House Mix - FloatedZeus</a>
          </div>
        </div>

        <div className="visual-player">
          <iframe 
            width="100%" 
            height="300" 
            scrolling="no" 
            frameBorder="no" 
            allow="autoplay" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1719430359&color=%23272727&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            title="Jungle Mix - Visual Player"
          />
          <div className="player-info">
            <a href="https://soundcloud.com/zach-cohen-37098677" title="FloatedZeus" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>FloatedZeus</a>
            {' · '}
            <a href="https://soundcloud.com/zach-cohen-37098677/junglemix-1" title="JungleMix - FloatedZeus" target="_blank" rel="noopener noreferrer" style={{ color: '#cccccc', textDecoration: 'none' }}>JungleMix - FloatedZeus</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatedZeus;
