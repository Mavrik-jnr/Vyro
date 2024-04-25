import ArtistCreator from "@/components/ArtistCreator";
import Category from "@/components/Category";
import NftCard from "@/components/NftCard";
import Trending from "@/components/Trending";
import { TopCreators, categories, staticNfts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-28 gap-64 w-full ">
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
          {staticNfts.map((item, idx) => (
            <NftCard
              key={idx}
              nftImg={item.nftImg}
              title={item.title}
              artist={item.artist}
              artistName={item.artistName}
            />
          ))}
        </div>
      </section>
      <section className="w-full ">
        <div className="w-full relative h-[660px] ">
          <span
            className="flex justify-center items-end absolute -inset-0 z-10 bg-gradient-to-b from-[#A259FF00] to-cta"
            aria-hidden="true"
          >
            <div className="w-full flex flex-col px-72 h-1/2  gap-8">
              <div className="flex flex-initial gap-2 bg-secondary w-fit px-5 py-2 rounded-3xl justify-between">
                <Image
                  src="/images/Avatars/Avatar4.svg"
                  width="24"
                  height="24"
                  alt="artist"
                ></Image>
                <p className="text-base">Shroomie</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col justify-between gap-8">
                  <h1 className="text-6xl">Magic Mushrooms</h1>
                  <Link
                    href="/rankings"
                    className="flex items-center py-4 px-12 gap-4 m-0 h-fit w-fit rounded-xl  bg-white text-secondary"
                  >
                    <Image
                      src="/images/icons/eye.svg"
                      width="24"
                      height="24"
                      alt="rocket launch"
                    ></Image>{" "}
                    <p>See all</p>
                  </Link>
                </div>
                <div>
                  <article className="bg-[#3b3b3b81] p-8 rounded-3xl">
                    <p className="text-white text-xs mb-3">Auction ends in:</p>
                    <div className="flex gap-2">
                      <div className="flex flex-col gap-3 items-center">
                        <p className="text-5xl font-bold">59</p>
                        <p className="text-xs">Hours</p>
                      </div>
                      <p className="text-5xl font-bold">:</p>
                      <div className="flex flex-col gap-3 items-center">
                        <p className="text-5xl font-bold">59</p>
                        <p className="text-xs">Minutes</p>
                      </div>
                      <p className="text-5xl font-bold">:</p>
                      <div className="flex flex-col gap-3 items-center">
                        <p className="text-5xl font-bold">59</p>
                        <p className="text-xs">Seconds</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </span>
          <Image
            src="/images/nfts/mushroom.png"
            alt="art category"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          ></Image>
        </div>
      </section>
      <section className="w-full max-w-[1440px] ">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">How it Works</h1>
          <p className="mt-4 text-2xl">Find out how to get started</p>
        </header>
        <div className=" grid grid-cols-3  gap-14  w-full">
          <article className="bg-secondary p-8 w-full max-w-[330px]  flex flex-col gap-5 items-center rounded-3xl">
            <Image
              src="/images/steps/wallet.svg"
              alt="art category"
              // layout="fill"
              width="250"
              height="250"
              objectFit="cover"
            ></Image>

            <div className="text-center">
              <h3 className="text-2xl  font-bold mb-2">Setup Your Wallet</h3>
              <p className="text-base">
                Set up your wallet of choice. Connect it to Vyro by clicking the
                wallet icon in the top right corner.
              </p>
            </div>
          </article>
          <article className="bg-secondary p-8 w-full max-w-[330px]  flex flex-col gap-5 items-center rounded-3xl">
            <Image
              src="/images/steps/earning.svg"
              alt="art category"
              // layout="fill"
              width="250"
              height="250"
              objectFit="cover"
            ></Image>

            <div className="text-center">
              <h3 className="text-2xl  font-bold mb-2">Create Collection</h3>
              <p className="text-base">
              Upload your work and setup your collection. Add a description, social links and floor price.
              </p>
            </div>
          </article>
          <article className="bg-secondary p-8 w-full max-w-[330px]  flex flex-col gap-5 items-center rounded-3xl">
            <Image
              src="/images/steps/wallet.svg"
              alt="art category"
              // layout="fill"
              width="250"
              height="250"
              objectFit="cover"
            ></Image>

            <div className="text-center">
              <h3 className="text-2xl  font-bold mb-2">Start Earning</h3>
              <p className="text-base">
              Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
