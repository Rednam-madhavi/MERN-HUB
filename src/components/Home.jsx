import React from 'react';

const Home = () => {
  const technologies = [
    { name: 'MongoDB', img: '/src/assets/mongodb.svg', link: 'https://www.mongodb.com/' },
    { name: 'Express', img: '/src/assets/express.svg', link: 'https://expressjs.com/' },
    { name: 'React', img: '/src/assets/react.svg', link: 'https://reactjs.org/' },
    { name: 'Node.js', img: '/src/assets/node.svg', link: 'https://nodejs.org/' },
  ];

  return (
    <div className='flex flex-col items-center justify-center min-h-[90vh] bg-white text-gray-900 p-4'>
      <h1 className='text-3xl md:text-4xl font-bold mb-6 text-center'>MERN Stack Technologies</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {technologies.map(({ name, img, link }) => (
          <div key={name} className='flex flex-col items-center'>
            <a href={link} target='_blank' rel='noopener noreferrer' className='relative'>
              <img 
                src={img} 
                alt={name} 
                className='h-40 w-40 p-5 hover:scale-125 transition-transform duration-200 cursor-pointer'
              />
              <span className='absolute left-0 right-0 bottom-[-25px] text-sm text-blue-600 underline opacity-0 hover:opacity-100 transition-opacity duration-200 text-center'>
                {link}
              </span>
            </a>
            <p className='mt-2 text-lg font-semibold'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;