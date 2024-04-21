import Image from 'next/image'
import React from 'react'

type Props = {
    id:number;
    artistName:string;

}

function ArtistCreator({id, artistName}: Props) {
  return (
    <article className='flex flex-col bg-secondary rounded-xl  py-16 relative items-center gap-2 cursor-pointer'>
        <p className='flex items-center w-fit h-7 rounded-2xl bg-primary p-2 absolute top-2 left-2 text-caption-text'>{id}</p>
        <Image alt='artist image' src={`/images/Avatars/Avatar${id}.svg`} width="120" height="120"></Image>
        <h3 className='text-xl font-semibold'>{artistName}</h3>
        <div>
            <p className='text-caption-text'>Total Sales: <span className='text-white'>34.53 ETH</span></p>
        </div>
    </article>
  )
}

export default ArtistCreator