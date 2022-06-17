import { NextPage } from 'next';
import Image from 'next/image';

import { formatDistanceToNow, secondsToMilliseconds } from 'date-fns';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Seo } from '../../components';

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

interface GameDesign {
  title: string;
  imgSrc: string;
  imgAlt: string;
  details: string[];
}

const HorrorTycoonPage: NextPage<NewsProps> = ({ news }) => {
  const gameDesign: GameDesign[] = [
    {
      title: 'Build',
      imgSrc: '/images/horror-tycoon/horror-tycoon-build.gif',
      imgAlt: 'Building in Horror Tycoon',
      details: [
        'Build walls, doorways, trap doors, fake walls and more to guide your guests through the haunted attraction maze.',
        'Build pre-built hallways and rooms if you are feeling rushed to build or want to experiment with different themes.',
      ],
    },
    {
      title: 'Customize',
      imgSrc: '/images/horror-tycoon/horror-tycoon-customize.gif',
      imgAlt: 'Building in Horror Tycoon',
      details: [
        'Decorate your haunted attraction with lighting effects, ghostly paintings, spooky props and more.',
        'Pick the colors to best scare your guests',
      ],
    },
    {
      title: 'Scare',
      imgSrc: '/images/horror-tycoon/horror-tycoon-scare.gif',
      imgAlt: 'Building in Horror Tycoon',
      details: [
        'Place scare traps along the way from ghosts to aliens and everything in between.',
        'Purchase new attractions with fear reputation, but be careful...the more of the same attractions you have and the closer they are to each other may result in a negative effect to your guests and not be as scary.',
      ],
    },
  ];

  return (
    <main>
      <Seo
        description='Scare, terrify and thrill guests as you build the haunted house of
            your nightmares. Demo now available on Steam!'
        title='Play Horror Tycoon | Smidge Games'
        url='https://smidge-games.vercel.app'
        shareUrl='/image/horror-tycoon/horror-tycoon-logo-bg.jpg'
      />
      <div className='relative w-screen h-[90vh]'>
        <Image
          src='/images/horror-tycoon/horror-tycoon-missing-posters.jpg'
          alt='Screenshot from Horror Tycoon'
          layout='fill'
          objectFit='cover'
          priority
        />
        <div className='absolute top-16 lg:top-32 left-0 flex flex-col justify-center w-full h-[50vh]'>
          <div>
            <div className='relative h-32 lg:h-48'>
              <Image
                src='/images/horror-tycoon/horror-tycoon-logo.png'
                alt='Horror Tycoon logo'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <h1 className='hidden'>Horror Tycoon</h1>
            <p className='mt-2 lg:mt-4 text-center text-red-600 text-2xl lg:text-4xl font-horror drop-shadow-dark'>
              Coming Soon
            </p>
          </div>
          <div className='mt-8 px-4 flex flex-col gap-4 sm:flex-row max-w-lg md:max-w-md w-full mx-auto'>
            <a
              href='https://www.youtube.com/watch?v=Mj46bhEw3Ow'
              target='_blank'
              rel='noreferrer'
            >
              <button className='bg-red-600 p-2 sm:p-4 text-sm sm:text-base w-full md:w-48 text-black rounded-md font-bold uppercase shadow-xl hover:bg-red-500 transition'>
                Watch Official Trailer
              </button>
            </a>
            <a
              href='https://store.steampowered.com/app/1506680/Horror_Tycoon/'
              target='_blank'
              rel='noreferrer'
            >
              <button className='bg-red-600 p-2 sm:p-4 text-sm sm:text-base w-full md:w-48 text-black rounded-md font-bold uppercase shadow-xl hover:bg-red-500 transition'>
                Download on Steam
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='px-4 mt-16'>
        <div className='container max-w-xl mx-auto'>
          <h2 className='font-horror text-lg text-red-600'>About the game</h2>
          <p className='text-zinc-400 text-sm'>
            Scare, terrify and thrill guests as you build the haunted house of
            your nightmares. Design and customize your creations with incredible
            detail to scare your guests, or risk losing it all in this
            tycoon/tower defense hybrid!
          </p>
        </div>
        <div className=' mt-16 flex flex-col items-center'>
          <h2 className='font-horror text-white text-2xl md:text-4xl'>
            Demo Now Available on Steam!
          </h2>
          <a
            className='group mt-6'
            href='https://store.steampowered.com/app/1506680/Horror_Tycoon/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='flex items-center'>
              <div className='text-[#66c0f4] bg-[#171a21] p-2 rounded-l-md'>
                <FaSteam size={32} />
              </div>
              <div className='px-4 py-3 rounded-r-md bg-red-600 transition group-hover:bg-red-500'>
                <span className='text-black font-bold uppercase'>
                  Download Now
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className='py-32'>
        <div className='container px-4 max-w-6xl mx-auto'>
          <p className='uppercase text-lg text-red-600 font-bold drop-shadow-lg'>
            Build
          </p>
          <h2 className='mt-2 font-horror text-4xl text-white drop-shadow-dark'>
            The <span className='text-red-600'>Haunted House</span> of Your
            Nightmares
          </h2>
        </div>
        <div className='mt-16 flex flex-col px-4 gap-8 items-center justify-center md:flex-row md:items-start'>
          {gameDesign.map((item) => {
            return (
              <div
                key={item.title}
                className='max-w-[480px] sm:max-w-sm overflow-hidden'
              >
                <h3 className='hidden'>{item.title}</h3>
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  width={480}
                  height={120}
                />
                <ul className='flex flex-col gap-y-4 text-sm'>
                  {item?.details.map((detail, index) => {
                    return <li key={index}>{detail}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className='flex'>
        <div className='hidden md:block'>
          <video
            autoPlay
            loop
            muted
            preload='none'
            onContextMenu={(e) => {
              e.preventDefault();
              return false;
            }}
            className='w-auto min-w-full min-h-full'
          >
            <source
              src='https://player.vimeo.com/progressive_redirect/playback/721233299/rendition/1080p/file.mp4?loc=external&signature=1ebee2693ea5e0b2389e7aab2a2e7304e450b5ae09719fe5b60ccf06534a6f7e'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='block md:hidden relative h-64 w-full'>
          <Image
            src='/images/horror-tycoon/horror-tycoon-guests-entering.jpg'
            alt='Guests entering a haunted house'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='mx-auto bg-black pt-32 pb-40'>
        <div className='max-w-6xl mx-auto px-4 md:px-16'>
          <div className='max-w-4xl mb-2 mx-auto'>
            <h2 className='text-red-600 font-horror text-4xl'>
              Community Updates
            </h2>
            <p className='mt-4 mb-16 font-normal'>
              Stay up-to-date on Horror Tycoon&apos;s progress with our{' '}
              <a
                className='normal-case text-red-600 hover:text-red-500'
                href='https://store.steampowered.com/news/app/1506680'
                target='_blank'
                rel='noreferrer'
              >
                community updates on Steam
              </a>
            </p>
          </div>
          <Splide
            options={{
              gap: '2em',
              perPage: 3,
              breakpoints: {
                640: {
                  perPage: 1,
                  arrows: false,
                },
                1024: {
                  perPage: 2,
                  arrows: false,
                },
              },
            }}
          >
            {news.map((item) => {
              return (
                <SplideSlide key={item.title}>
                  <div>
                    <div>
                      <p className='mb-1 text-xs text-zinc-300 uppercase'>
                        {item.date}
                      </p>
                      <a href={item.url} target='_blank' rel='noreferrer'>
                        <h2 className='mb-2 transition text-red-600 text-xl font-horror hover:text-red-500'>
                          {item.title}
                        </h2>
                      </a>
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
      <div className='flex'>
        <video
          autoPlay
          loop
          muted
          preload='none'
          onContextMenu={(e) => {
            e.preventDefault();
            return false;
          }}
          className='hidden md:block w-auto min-w-full min-h-full'
        >
          <source
            src='https://player.vimeo.com/progressive_redirect/playback/721215008/rendition/1080p/file.mp4?loc=external&signature=8f7db666832f890efca2d4d213963867092439b6afe479efaf0dbb81d409e30d'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='block md:hidden relative h-64 w-full'>
        <Image
          src='/images/horror-tycoon/horror-tycoon-scenery-3.jpg'
          alt='Guests entering a haunted house'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='px-4 max-w-7xl mx-auto py-32 grid grid-cols-1 justify-between items-center md:grid-cols-2'>
        <div>
          <h2 className='font-horror text-4xl text-red-600'>Be Sinister.</h2>
          <p className='mt-4 text-red-600 font-normal'>
            The further you progress the more you will need to work to scare
            your guests. Sinister traps are truly the stuff of nightmares as you
            have the ability to make guests disappear from the living and join
            the dead.
          </p>
          <p className='mt-4 text-red-600 font-normal'>
            Don&apos;t get caught or else your career will be over. Be sure to
            hire the best security and lawyers you can afford to keep
            investigations away from your haunted attraction.
          </p>
        </div>
        <div className='relative h-48 w-full mt-16 md:mt-0'>
          <Image
            src='/images/horror-tycoon/skull.svg'
            alt='Skull representing death caused by sinister traps.'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='relative flex flex-col py-16 w-full bg-red-600'>
        <div className='relative h-48'>
          <Image
            src='/images/smidge-games/smidge-games-logo-dark.png'
            alt='Smidge Games logo'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 w-full text-center text-black text-sm'>
          <p>
            Horror Tycoon is published by{' '}
            <a
              href='https://www.gameparic.com'
              target='_blank'
              rel='noreferrer'
            >
              Gameparic
            </a>{' '}
            and{' '}
            <a href='https://www.playway.com' target='_blank' rel='noreferrer'>
              Playway, S.A.
            </a>
          </p>
        </div>
      </div>
    </main>
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
