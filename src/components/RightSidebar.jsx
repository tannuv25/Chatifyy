import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({ selectedUser }) => {
  return selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? "max-md-hidden" : ""}`}>
      <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto'>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt="" className='w-20 aspect-square rounded-full' />
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-green-500'></p>
          {selectedUser.fullName}
        </h1>
        <p className='px-10 mx-auto'>{selectedUser.bio}</p>
      </div>

      <hr className='border-[#ffffff50] my-4' />

      {/* <div className='px-5 text-xs'>
          <p>Media</p>
          <div className='mt-2 max-h-50 overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'></div>
          {imagesDummyData.map((url, index)=>(
            <div key={index} onClick={()=> window.open(url)}
            className='cursor-pointer rounded'>
              <img src={url} alt="" className='h-full rounded-md'/>
                
              </div>
          ))}
        </div> */}

      <div className="px-5 text-xs min-h-0">
        <p className="mb-2 text-gray-300">Media</p>

        <div className="grid grid-cols-2 gap-3 h-full overflow-y-auto pr-1 pb-16">
          {imagesDummyData.map((url, index) => (
            <div
              key={index}
              onClick={() => window.open(url)}
              className="cursor-pointer rounded-md overflow-hidden aspect-square"
            >
              <img
                src={url}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

     <button
  className="
    mt-auto 
    mx-4
    mb-2
    w-[85%]
    bg-linear-to-r from-purple-500 to-violet-600
    text-white text-xs font-medium
    py-1.5
    rounded-full
    hover:opacity-90 transition
  "
>
  Logout
</button>

    </div>
  )
}

export default RightSidebar