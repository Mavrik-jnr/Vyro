import Image from 'next/image'
import React from 'react'

type Props = {
    categoryText:string;
    categoryPicture:string;
    categoryIcon:string;
}

function Category({categoryText,categoryPicture, categoryIcon}: Props) {
  return (
    <article className='flex flex-col w-full'>
        <div  className='w-[100%] relative h-[240px] '>
        <span className="flex justify-center items-center absolute -inset-0 z-10 backdrop-blur" aria-hidden="true">
          
        <Image src={categoryIcon} alt='art category icon' height="100" width="100" className='rounded-t-3xl' ></Image>
        </span>
        <Image src={categoryPicture} alt='art category'  layout='fill' objectFit='cover' className='rounded-t-3xl' ></Image>
        </div>
        <div className='p-5 rounded-b-xl w-full bg-secondary'>
            {categoryText}
        </div>

    </article>
  )
}

export default Category