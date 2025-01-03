import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className=' flex gap-2 items-center mb-3 justify-between mt-6 '>
      <p className='text-gray-700 text-lg font-semibold'>{text1}</p>
      <p className='text-orange-400 cursor-pointer  text-sm  font-bold'>{text2}</p>
    </div>
  )
}

export default Title