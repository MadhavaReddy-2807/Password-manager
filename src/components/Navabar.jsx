import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-cyan-900 flex justify-between h-fit p-3 text-white mt'>
        <span className='text-xl '>
          <span className='text-green-500'>&lt;</span>
          PassOp
          <span className='text-green-500'>/&gt;</span>
          </span>       
         <div>
          <button className='flex gap-2 flex-row bg-green-700 p-1 pr-2 rounded-2xl' >
            <img src="icons/github.svg" alt="github" />
            <span className='mt-1'>GitHub</span></button>
         </div>
    </nav>
  )
}

export default Navbar