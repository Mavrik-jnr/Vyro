import Image from 'next/image'
import React from 'react'

type Props = {
    categoryText:string;
}

function Category({categoryText}: Props) {
  return (
    <article className='flex flex-col w-full'>
        <div  className='w-[100%] relative h-[240px] '>

        <Image src="/images/category/Art.svg" alt='art category'  layout='fill' objectFit='cover' className='rounded-t-3xl' ></Image>
        </div>
        <div className='p-5 rounded-b-xl w-full bg-secondary'>
            {categoryText}
        </div>

    </article>
  )
}

export default Category