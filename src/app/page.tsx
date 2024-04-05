import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <section className="flex flex-row flex-auto gap-10">
    <div className="flex items-start flex-col flex-initial gap-6 w-1/2">

    <h1 className="text-6xl font-bold">
      Discover Digital Art and Collect NFT
    </h1>
    <p className="text-xl">
    Unleash your digital essence with VYRO NFTs – where imagination meets blockchain, creating timeless digital art for the modern age. Join the revolution, own a piece of the future today.
    </p>
    <button className="px-8 py-4 bg-cta flex flex-row flex-none gap-4 rounded-md">
      <Image src='/RocketLaunch.svg' width="24" height="24" alt="rocket launch"></Image>
      Get Started
    </button>
     {/* ANIMATE */}
    <div className="flex flex-row gap-8">
     <article>
      <h4 className="font-bold text-3xl">240k+</h4>
      <p className="text-2xl">Total Sale</p>
     </article>
     <article >
      <h4 className="font-bold text-3xl">100k+</h4>
      <p className="text-2xl">Auctions</p>
     </article>
     <article>
      <h4 className="font-bold text-3xl">240k+</h4>
      <p className="text-2xl">Artists</p>
     </article>
    </div>
    </div>
    <article>
      <Image src="/hero.png" width="510" height="401" alt="heroNft"></Image>
      <div>
        <h5>Space Walking</h5>
        <Image src="/images/Avatars/Avatar.svg" width="24" height="24" alt="artist" ></Image>
      </div>
    </article>
  </section>

    </main>
  );
}
