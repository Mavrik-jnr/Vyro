import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <section>
    <div className="flex items-start flex-col flex-initial gap-6">

    <h1 className="text-6xl">
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
  </section>

    </main>
  );
}
