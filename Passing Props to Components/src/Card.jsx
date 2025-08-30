import React from 'react'

function Card({channelName='Hitesh'}) {
    
  return (
    <>
    <div className='w-90 h-fit bg-white p-3 m-4 flex items-center rounded-xl' style={{flexDirection: 'column'}}>
        <img src='./img/img1.jpg' className='w-30 h-30 border-2 border-amber-300' alt='Scenery image'/>
        <h2 className='text-2xl font-bold mt-2'>{channelName}</h2>
        <p className='text-gray-600 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium placeat pariatur hic quasi corporis quia vero rerum neque, delectus dolores.</p>
        <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
      </div>
      
    </>
      

  )
}

export default Card