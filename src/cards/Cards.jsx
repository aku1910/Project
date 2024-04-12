import React from 'react'

const Cards = () => {
  return (
    <>
    <div className='cards flex gap-7  justify-center'>
        <div className='  card1 pt-[10%] pl-[40px]'>
            <h1 className='text-[30px] pb-[10px] font-semibold'>Any day Offers</h1>
            <p className='text-[18px] font-light'>Suspendisse Faucibus Sed</p>
            <button className='font-bold text-[17px] pt-[20px]'>SHOP NOW</button>
        </div>
        <div className='  card2 pt-[10%] pl-[40px]'>
            <h1 className='text-[30px] pb-[10px] font-semibold'>Any day Offers</h1>
            <p className='text-[18px] font-light'>Suspendisse Faucibus Sed</p>
            <button className='font-bold text-[17px] pt-[20px]'>SHOP NOW</button>
        </div>
    </div>
    </>
  )
}

export default Cards