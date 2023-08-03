import { useState, useEffect } from 'react';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

const Portfolio = () => {
  const [displayCount, setDisplayCount] = useState(2);
  
  const portfolioItems = [
    { 
      href: 'https://lyriks-music-player-snowy.vercel.app/',
      imgSrc: '/assets/img/lyriks.png'
    },
    { 
      href: 'https://modern-ui-ux-restaurant.vercel.app/',
      imgSrc: '/assets/img/restu.png'
    },
    {
      href: 'https://reportease.vercel.app/',
      imgSrc: '/assets/img/reportease.png'
    },
    {
      href: '/',
      imgSrc: '/assets/img/portfolio.png'
    }
  ];

  const [shuffledItems, setShuffledItems] = useState([]);

  useEffect(() => {
    setShuffledItems(shuffleArray([...portfolioItems]));
  }, []);

  const areAllItemsDisplayed = displayCount >= shuffledItems.length;
  
  return (
    <div className="container py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {shuffledItems.slice(0, displayCount).map((item, index) => (
          <a key={index} href={item.href} className="mx-auto transform transition-all hover:scale-105 md:mx-0">
            <img src={item.imgSrc} className="w-full shadow" alt="portfolio image" />
          </a>
        ))}
      </div>
      {areAllItemsDisplayed ? (
        <button 
          className= "mt-4 mx-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setDisplayCount(2)}
        >
          Hide Projects
        </button>
      ) : (
        <button
          className= "mt-4 mx-auto text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => setDisplayCount(count => count + 2)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Portfolio;
