import React, { useEffect, useRef } from 'react';
import './Header.css'
import './App.css'
import smallParticles from './assets/small-particles.svg';
import bigParticles from './assets/big-particles.svg';
import frame from './assets/frame.png';
import frameBorder from './assets/frame-border.svg';
import Arrow from './assets/arrow.svg';
function Header() {
  const headerRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const particles = particlesRef.current;

    function move(event) {
      const mouseX = event.clientX / 30;
      const mouseY = event.clientY / 30;
      particles.style.left = mouseX + 'px';
      particles.style.top = mouseY + 'px';
    }

    if (header && particles) {
      header.addEventListener('mousemove', move);
    }

    // Resolver code adapted to run inside useEffect
    const resolver = {
      resolve: function resolve(options, callback) {
        const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
        const combinedOptions = Object.assign({}, options, { resolveString: resolveString });

        function getRandomInteger(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function randomCharacter(characters) {
          return characters[getRandomInteger(0, characters.length - 1)];
        }

        function doRandomiserEffect(options, callback) {
          const characters = options.characters;
          const timeout = options.timeout;
          const element = options.element;
          const partialString = options.partialString;
          let iterations = options.iterations;

          setTimeout(() => {
            if (iterations >= 0) {
              const nextOptions = Object.assign({}, options, { iterations: iterations - 1 });

              if (iterations === 0) {
                element.textContent = partialString;
              } else {
                element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
              }

              doRandomiserEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          }, timeout);
        }

        function doResolverEffect(options, callback) {
          const resolveString = options.resolveString;
          const characters = options.characters;
          const offset = options.offset;
          const partialString = resolveString.substring(0, offset);
          const combinedOptions = Object.assign({}, options, { partialString: partialString });

          doRandomiserEffect(combinedOptions, () => {
            const nextOptions = Object.assign({}, options, { offset: offset + 1 });

            if (offset <= resolveString.length) {
              doResolverEffect(nextOptions, callback);
            } else if (typeof callback === "function") {
              callback();
            }
          });
        }

        doResolverEffect(combinedOptions, callback);
      }
    };

    const strings = ['Maria Kuneva', 'UI & UX designer'];
    let counter = 0;
    const elements = header.querySelectorAll('[data-target-resolver]');

    function populateElements(index) {
      if (index >= elements.length || counter >= strings.length) {
        return;
      }

      const options = {
        offset: 0,
        timeout: 5,
        iterations: 10,
        characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
        resolveString: strings[counter],
        element: elements[index]
      };

      function callback() {
        if (counter === 0) {
          setTimeout(() => {
            counter++;
            populateElements(index + 1);
          }, 2000);
        } else {
          counter++;
          populateElements(index + 1);
        }
      }

      resolver.resolve(options, callback);
    }

    // Start animation after 1 second delay
    const timeoutId = setTimeout(() => {
      populateElements(0);
    }, 1000);

    return () => {
      if (header) {
        header.removeEventListener('mousemove', move);
      }
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div id="header" ref={headerRef} style={{position: 'relative'}}>
      <img className="smallParticles" src={smallParticles} alt="Small particles" />

      <div className="home">
        <div className="text">
          <h1 data-target-resolver></h1>
          <h3 data-target-resolver></h3>
        </div>

        <div>
          <img
            ref={particlesRef}
            src={bigParticles}
            className="bigParticles"
            id="bigParticles"
            alt="Big particles"

          />

          <div className="frameCont">
            <img src={frame} id="frame" alt="Frame" />
            <img src={frameBorder} id="back-border" alt="Frame Border" />
          </div>
          <img id = "arrow" src={Arrow} alt="Arrow" />
          <h4 class="section-title">projects</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
