import React from 'react'
import Logo from '../Assets/Bit Bot-1.png'
import '../App.css';
const header = () => {
  return (
    <div className='bg-mb bg-cover bg-no-repeat bg-center backdrop-blur-[100px] backdrop-opacity-75 '>
        <header className=" text-white ">
  <div className=" mx-9 ">
    <nav className="flex justify-between items-center">
      <a href="/" className="text-2xl font-bold"><img src={Logo} alt="Bitbot" className='w-[100px]'/></a>
      <ul className="flex gap-2">
        <li><a href="/" className="hover:text-gray-300 text-xl">Link 1</a></li>
        <li><a href="/" className="hover:text-gray-300 text-xl ">Link 2</a></li>
        <li><a href="/" className="hover:text-gray-300 text-xl">Link 3</a></li>
      </ul>
    </nav>
  </div>
</header>
    </div>
  )
}

export default header