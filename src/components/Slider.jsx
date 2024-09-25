import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]); // State to hold movies data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const ImgUrl = "https://image.tmdb.org/t/p/w500";

  // const elementRef = useRef();
  const sliderRef = useRef(null); // Reference to the slider container

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/all/week?api_key=b2276cc8b481a9ab8f540dabe8c77901'
        );
        setMovies(response.data.results); // Store the movies in the state
        setLoading(false); // Set loading to false
      } catch (error) {
        setError('Error fetching trending movies');
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []); // Empty dependency array means this useEffect will run once when the component mounts

  // Conditional rendering based on loading, error, or data state
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  // const screenWidth = window.innerWidth;

  // const slideRight = (element) => {
  //   element.scrollLeft += screenWidth-100
  // }
  // const slideLeft = (element) => {
  //   element.scrollLeft -= screenWidth-100
  // }

  

  // Scroll functions
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };


  return (
    <div className='relative pt-16'>
        <IoIosArrowForward className='text-white text-6xl absolute right-0 my-48 mx-2' onClick={scrollRight}/>
        <IoIosArrowBack className='text-white text-6xl absolute left-0 my-48 mx-2'onClick={scrollLeft}/>
        <div className='flex overflow-auto scrollbar-none scroll-smooth mt-1 px-16' ref={sliderRef}>
            {movies.map((movie) => (
                <img src={ImgUrl + movie.backdrop_path} alt="" className='min-w-full h-[500px] object-cover mr-16'/>
            ))}
        </div>
      <h1>Trending Movies and TV Shows</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title || movie.name}</h2>
            <p>{movie.overview}</p>
            <img
              src={ImgUrl + movie.poster_path}
              alt={movie.title || movie.name}
              width="200"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
