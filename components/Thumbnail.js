import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div
      ref={ref}
      className="group transform cursor-pointer p-2 transition duration-200 ease-in hover:z-50 sm:hover:scale-105"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={1080}
        height={600}
      />
      <div className="p-2">
        <p className="max-w-md truncate">{result.overview}</p>
        <h2
          className="traansition-all mt-1 text-xl font-bold
        text-white duration-100 ease-in-out"
        >
          {result.title || result.original_name}
          <p className="flex items-center text-sm font-light opacity-0 group-hover:opacity-100">
            {result.media_type && `${result.media_type} .`}{' '}
            {result.release_date || result.first_air_date} .{' '}
            <ThumbUpIcon className="mx-2 h-5" /> {result.vote_count}
          </p>
        </h2>
      </div>
    </div>
  )
})

export default Thumbnail
