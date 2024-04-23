import Image from 'next/image'
import React from 'react'


type Props = {
    nftImg:string,
    artist:string,
    artistName:string,
    title: string;
}

function NftCard({nftImg, artist, artistName, title}: Props) {
  return (
    <article className='flex flex-col w-full max-w-[330px] '>
    <div  className='w-[100%] relative h-[240px] '>
 
    <Image src={nftImg} alt='art category' layout='fill' objectFit='cover' className='rounded-t-3xl' ></Image>
    </div>
    <div className='p-7 rounded-b-xl w-full bg-secondary'>
        <h1 className='font-bold text-xl mb-[5px]'>{title}</h1>
        <div className="flex flex-auto gap-2 mb-6">
              <Image
                src={artist}
                width="24"
                height="24"
                alt="artist"
              ></Image>
              <p className="text-base">{artistName}</p>
            </div>

            <div className='flex justify-between w-full'>
                <div>
                    <p className='text-caption-text text-xs'>Price</p>
                    <p>1.63 ETH</p>
                </div>
                <div>
                    <p className='text-caption-text text-xs'>Highest Bid</p>
                    <p>0.33 wETH</p>
                </div>
            </div>
    </div>

</article>
  )
}

export default NftCard