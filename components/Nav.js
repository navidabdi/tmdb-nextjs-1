import requests from '../utils/requests'
import { useRouter } from 'next/router'

function Nav() {
  const router = useRouter()

  return (
    <nav className="relative">
      <div className="flex space-x-10 overflow-x-scroll whitespace-nowrap text-2xl scrollbar-hide sm:space-x-20 ">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="transform cursor-pointer text-sm transition duration-100 last:pr-24 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/12 bg-gradient-to-l from-[#06202a]" />
    </nav>
  )
}

export default Nav
