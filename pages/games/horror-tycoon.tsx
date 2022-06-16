import { NextPage } from 'next';
import Image from 'next/image';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

import { formatDistanceToNow, secondsToMilliseconds } from 'date-fns';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FaSteam } from '@react-icons/all-files/fa/FaSteam';

type SteamNewsProps = {
  contents: string;
  date: string;
  featuredImage: string;
  title: string;
  url: string;
};

type NewsProps = {
  news: SteamNewsProps[];
};

type NewsItemProps = {};

const HorrorTycoonPage: NextPage<NewsProps> = ({ news }) => {
  return (
    <div>
      <div className='fixed w-screen h-screen -z-10'>
        <Image
          src='/images/horror-tycoon/horror-tycoon-bg.jpg'
          alt='Screenshot from Horror Tycoon'
          layout='fill'
        />
      </div>
      <div className='flex items-center bg-black w-full h-full md:h-[calc(100vh_-_6em)] -z-10'>
        <div className='container mx-auto max-w-6xl w-full shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.9),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.7)]'>
          <LiteYouTubeEmbed
            id='Mj46bhEw3Ow'
            title='Horror Tycoon official trailer'
          />
        </div>
      </div>
      <div className='container max-w-8xl mx-auto flex flex-col bg-black/50 backdrop-blur-sm'>
        <div className='py-16'>
          <div className='relative h-48'>
            <Image
              src='/images/horror-tycoon/horror-tycoon-logo.png'
              alt='Horror Tycoon logo'
              layout='fill'
              objectFit='contain'
            />
          </div>
          <h1 className='hidden'>Horror Tycoon</h1>
        </div>
        <div className='container max-w-2xl mx-auto'>
          <h2 className='font-horror text-2xl text-red-600'>About the game</h2>
          <p className='text-zinc-400'>
            Scare, terrify and thrill guests as you build the haunted house of
            your nightmares. Design and customize your creations with incredible
            detail to scare your guests, or risk losing it all in this
            tycoon/tower defense hybrid!
          </p>
          <div className='container flex flex-col items-center my-16'>
            <h2 className='mb-8 font-horror text-white text-4xl'>
              Demo Now Available on Steam!
            </h2>
            <a
              className='group'
              href='https://store.steampowered.com/app/1506680/Horror_Tycoon/'
              target='_blank'
              rel='noreferrer'
            >
              {/* <Button size='xl'>Download Now</Button> */}
              <button className='flex items-center'>
                <div className='text-[#66c0f4] bg-black p-2 rounded-l-lg'>
                  <FaSteam size={32} />
                </div>
                <div className='px-4 py-3 rounded-r-lg bg-red-600 transition group-hover:bg-red-500'>
                  <span className='text-white uppercase'>Download Now</span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='mx-auto bg-black py-16'>
        <div className='max-w-6xl mx-auto px-4 md:px-16'>
          <h2 className='max-w-4xl mb-8 mx-auto text-3xl font-horror text-white'>
            Community Updates
          </h2>
          <Splide
            options={{
              rewind: true,
              gap: '2em',
              perPage: 3,
              breakpoints: {
                640: {
                  perPage: 1,
                  arrows: false,
                },
                1024: {
                  perPage: 2,
                },
              },
            }}
          >
            {news.map((item) => {
              return (
                <SplideSlide key={item.title}>
                  <div>
                    <div>
                      <p className='text-xs text-zinc-500 uppercase'>
                        {item.date}
                      </p>
                      <h2 className='text-white text-xl font-horror'>
                        {item.title}
                      </h2>
                      {!item.featuredImage && (
                        <p className='text-sm'>{item.contents}</p>
                      )}
                      {item.featuredImage && (
                        <div className='relative h-24 w-full rounded-lg overflow-hidden'>
                          <Image
                            src={item.featuredImage}
                            alt='Featured Image'
                            layout='fill'
                            objectFit='cover'
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=1506680&count=10&maxlength=256&format=json'
  );

  const data = await res?.json();

  const news = await data.appnews.newsitems;

  const updatedNews = await news.map((item: SteamNewsProps) => {
    item = {
      ...item,
      date: formatDistanceToNow(
        new Date(secondsToMilliseconds(parseInt(item.date))),
        {
          addSuffix: true,
        }
      ),
    };

    const hasImage = item.contents.startsWith('{STEAM_CLAN_IMAGE}');

    if (hasImage) {
      const s = item.contents.split('.png');

      const imageContent = `${s[0]}.png`;
      const remainingContent = s[1];

      const endpoint = imageContent.split('{STEAM_CLAN_IMAGE}')[1];
      const newImageSource = `https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/${endpoint}`;
      // eslint-disable-next-line no-param-reassign
      item = {
        ...item,
        contents: remainingContent,
        featuredImage: newImageSource,
      };
    }
    return item;
  });

  return { props: { news: updatedNews } };
}

export default HorrorTycoonPage;
