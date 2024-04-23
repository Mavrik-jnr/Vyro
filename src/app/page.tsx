import ArtistCreator from "@/components/ArtistCreator";
import Category from "@/components/Category";
import NftCard from "@/components/NftCard";
import Trending from "@/components/Trending";
import { TopCreators, categories, staticNfts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-28 gap-64 ">
      <section className="flex flex-row flex-auto gap-10 items-center w-full justify-between pt-20 max-w-[1440px] ">
        <div className="flex items-start flex-col flex-initial gap-6 w-1/2">
          <h1 className="text-6xl font-bold">
            Discover Digital Art and Collect NFT
          </h1>
          <p className="text-xl">
            Unleash your digital essence with VYRO NFTs – where imagination
            meets blockchain, creating timeless digital art for the modern age.
            Join the revolution, own a piece of the future today.
          </p>
          <button className="px-8 py-4 bg-cta flex flex-row flex-none gap-4 rounded-md">
            <Image
              src="/RocketLaunch.svg"
              width="24"
              height="24"
              alt="rocket launch"
            ></Image>
            Get Started
          </button>
          {/* ANIMATE */}
          <div className="flex flex-row gap-8">
            <article>
              <h4 className="font-bold text-3xl">240k+</h4>
              <p className="text-2xl">Total Sale</p>
            </article>
            <article>
              <h4 className="font-bold text-3xl">100k+</h4>
              <p className="text-2xl">Auctions</p>
            </article>
            <article>
              <h4 className="font-bold text-3xl">240k+</h4>
              <p className="text-2xl">Artists</p>
            </article>
          </div>
        </div>
        <article className="cursor-pointer">
          <Image
            src="/hero.png"
            width="500"
            height="401"
            alt="heroNft"
            className="rounded-t-3xl"
          ></Image>
          <div className="flex flex-col gap-4 bg-secondary p-5 rounded-b-3xl">
            <h5 className="font-semibold">Space Walking</h5>
            <div className="flex flex-auto gap-4">
              <Image
                src="/images/Avatars/Avatar1.svg"
                width="24"
                height="24"
                alt="artist"
              ></Image>
              <p className="text-base">Animakid</p>
            </div>
          </div>
        </article>
      </section>

      <section className="flex flex-col flex-auto gap-24 items-start w-full max-w-[1440px]">
        <header className="">
          <h1 className="text-4xl font-bold">Trending Collection</h1>
          <p className="mt-4 text-2xl">
            Checkout our weekly updated trending collection.
          </p>
        </header>

        <div className="flex justify-between w-full">
          <Trending
            artist="Mr Fox"
            trending1="/images/nfts/doggo.svg"
            trending2="/images/nfts/rabbit.svg"
            trending3="/images/nfts/bear.svg"
            profile="/images/Avatars/Avatar6.svg"
            title="DSGN Animals"
          />
          <Trending
            artist="Shroomie"
            trending1="/images/nfts/BigMush.svg"
            trending2="/images/nfts/mediumMush.svg"
            trending3="/images/nfts/smallMush.svg"
            profile="/images/Avatars/Avatar7.svg"
            title="Magic Mushrooms"
          />
          <Trending
            artist="BeKind2Robots"
            trending1="/images/nfts/bigRobot.svg"
            trending2="/images/nfts/mediumRobot.svg"
            trending3="/images/nfts/smallRobot.svg"
            profile="/images/Avatars/Avatar12.svg"
            title="DSGN Animals"
          />
        </div>
      </section>
      <section className="flex flex-col flex-auto gap-10 items-start w-full max-w-[1440px]">
        <header className="flex justify-between w-full items-end">
          <div>
            <h1 className="text-4xl font-bold">Top Creators</h1>
            <p className="mt-4">
              Checkout our Top Rated Creators On The NFT Marketplace
            </p>
          </div>

          <Link
            href="/rankings"
            className="flex items-center py-4 px-12 gap-4 m-0 h-fit rounded-xl border-solid border-2 border-cta"
          >
            <Image
              src="/images/icons/RocketLaunchCta.svg"
              width="24"
              height="24"
              alt="rocket launch"
            ></Image>{" "}
            <p>View Rankings</p>
          </Link>
        </header>

        <div className="grid grid-cols-4 w-full gap-16">
          {TopCreators.map((item, id) => (
            <ArtistCreator key={id} id={id + 1} artistName={item.artistName} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-[1440px]">
        <h1 className="text-4xl font-bold mb-16">Browse Categories</h1>

        <div className=" grid grid-cols-4 gap-14 cursor-pointer">
          {categories.map((item) => (
            <Category
              key={item.category}
              categoryText={item.category}
              categoryPicture={item.categoryPicture}
              categoryIcon={item.categoryIcon}
            />
          ))}
        </div>
      </section>
      <section className="w-full max-w-[1440px]">
        <header className="flex justify-between w-full items-end mb-16">
          <div>
            <h1 className="text-4xl font-bold">Discover more NFTs</h1>
            <p className="mt-4">Explore New Trending NFTs</p>
          </div>

          <Link
            href="/rankings"
            className="flex items-center py-4 px-12 gap-4 m-0 h-fit rounded-xl border-solid border-2 border-cta"
          >
            <Image
              src="/images/icons/eye.svg"
              width="24"
              height="24"
              alt="rocket launch"
            ></Image>{" "}
            <p>See all</p>
          </Link>
        </header>
        <div className=" grid grid-cols-3  gap-14  w-full">
          {
            staticNfts.map((item,idx)=>(
              <NftCard key={idx} nftImg={item.nftImg} title={item.title} artist={item.artist} artistName={item.artistName}/>
            ))
          }
        </div>

      </section>
    </main>
  );
}
