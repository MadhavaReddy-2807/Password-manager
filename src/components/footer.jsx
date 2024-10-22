import React from 'react'

const Footer = () => {
  return (
    <footer className=" flex bg-cyan-900 w-screen flex-row justify-between gap-2 p-2 text-white">      <div className=''><span className='text-xl  '>
      <span className='text-green-500'>&lt;</span>
      PassOp
      <span className='text-green-500'>/&gt;</span>
      </span></div>
      <span className='flex'>Created with <span className='ml-2 mr-2'><img src="icons/love.svg" height={1} width={25}alt="" /> </span>-<span className='font-bold '>Madhava Reddy</span></span>
      </footer>   

  )
}

export default Footer