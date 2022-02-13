import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'
const Thumbnail = ({ result }) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/w500/'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, rotate: [0, 0, 30, 30, 0] }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.1,
        },
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.1,
        },
      }}
      animate={{
        scale: [1, 1.1, 1.1, 1, 1],
        rotate: [0, 0, 60, 60, 0],
      }}
      transition={{ duration: 0.3 }}
      className="group transform cursor-pointer transition duration-200 ease-in"
    >
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        width={500}
        height={281}
      />
      <div className="pt-2">
        <h2
          className="traansition-all mt-1 truncate text-[1.1rem]
        font-bold text-white duration-100 ease-in-out"
        >
          {result.title || result.original_name}
        </h2>
        <p className="max-w-md truncate">{result.overview}</p>
        <p className="flex items-center text-sm font-light">
          {result.media_type && `${result.media_type} .`}{' '}
          {result.release_date || result.first_air_date} .{' '}
          <ThumbUpIcon className="mx-2 h-5" /> {result.vote_count}
        </p>
      </div>
    </motion.div>
  )
}

export default Thumbnail
