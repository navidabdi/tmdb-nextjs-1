const HeaderItem = ({ Icon, title }) => {
  return (
    <li className="group flex w-12 cursor-pointer flex-col items-center justify-center p-2 hover:text-white sm:w-20">
      <Icon className="h-7 group-hover:animate-bounce" />
      <span className="text-xs tracking-widest opacity-0 transition-all duration-100 ease-in group-hover:opacity-100">
        {title}
      </span>
    </li>
  )
}

export default HeaderItem
