import React from 'react'
import Image from 'next/image'
import { Movie } from '../typings'
interface Props{
    // movie: Movie |DocumentData
    movie:Movie
}
function Thumbnail({movie}:Props) {
  return (
    <div className=' relative h-28 min-w-[180px] cursor-pointertransition duration-200
    ease-out md:h-38 md:min-w-[260px]  md:hover:scale-105'>
       <Image
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
              className="rounded-sm object-cover md:rounded"
              layout="fill" alt={''}      />
    </div>
  )
}

export default Thumbnail