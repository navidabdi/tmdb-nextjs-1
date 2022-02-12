import Image from 'next/image'
import logo from '../public/img/hulu-white.png'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between p-4 sm:flex-row-reverse">
      <Image
        className="object-contain"
        src={logo}
        alt="hulu-logo"
        width={120}
        height={60}
      />
      <ul className="flex w-full flex-grow justify-between sm:max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </ul>
    </header>
  )
}

export default Header
