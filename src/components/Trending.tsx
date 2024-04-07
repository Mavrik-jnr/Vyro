import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    trending1: string;
    trending2: string;
    trending3: string;
    title:string;
    profile:string;
    artist:string;
}

function Trending({title, artist, profile, trending1, trending2, trending3}: Props) {
  return (
    <article className='flex flex-col gap-4'>
        <Image alt="most trending" src={trending1} width="400" height="500"></Image>
       
        <div className='flex justify-between'>

        
        <Image alt="more trending" src={trending2} width="130" height="100"></Image>
        <Image alt="less trending" src={trending3} width="130" height="100"></Image>
        <Link href="/collections" className='flex items-center justify-center bg-cta py-4 px-4 text-2xl rounded-2xl'> 1025+</Link>
        </div>

        <p>{title}</p>
        <div className='flex gap-4'>
        <Image alt="avatar" src={profile} width="24" height="24"></Image>
        <p className='text-base'>{artist}</p>
        </div>

    </article>
  )
}

export default Trending