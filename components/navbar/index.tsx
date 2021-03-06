import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';

import { FaSteam } from '@react-icons/all-files/fa/FaSteam';
import Button from '../button';
import Tag from '../tag';
import Link from 'next/link';

const games = [
  {
    name: 'Horror Tycoon',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '/games/horror-tycoon',
    genres: [{ label: 'Strategy' }, { label: 'Simulator' }],
    imgSrc: '/images/horror-tycoon/horror-tycoon-logo-bg.jpg',
    imgAlt: 'Horror Tycoon logo',
    accentClasses: 'bg-[#320000] text-[#c70004]',
  },
];
const callsToAction = [
  {
    name: 'View Steam Page',
    href: 'https://store.steampowered.com/app/1506680/Horror_Tycoon/',
    icon: FaSteam,
  },
];
const publishers = [
  {
    href: 'https://gameparic.com',
    logo: '/images/publishers/gameparic.png',
    alt: 'Gameparic logo',
  },
  {
    href: 'https://playway.com',
    logo: '/images/publishers/playway-sa.png',
    alt: 'Playway, S.A. logo',
  },
];
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
];
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview:
      'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const MobileNav = () => {
  return (
    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Popover.Panel
        focus
        className='absolute z-30 top-0 inset-x-0 transition transform origin-top-right md:hidden shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.5),0px_4px_5px_0px_rgba(0,0,0,0.14),0px_1px_10px_0px_rgba(0,0,0,0.3)]'
      >
        {({ close }) => (
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-900'>
            <div className='pt-5 pb-6 px-5 sm:pb-8'>
              <div className='flex items-center justify-between'>
                <div className='relative w-32 h-16'>
                  <Image
                    src='/images/smidge-games/smidge-games-logo-orange.png'
                    alt='Smidge Games logo'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-brand-600 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6 sm:mt-8'>
                <nav>
                  <div className='grid justify-center grid-cols-1'>
                    {games.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div
                          onClick={() => close()}
                          className='relative group transition -m-3 flex flex-col justify-between max-w-sm w-full mx-auto rounded-lg overflow-hidden bg-zinc-900/30 border border-zinc-900/50  hover:bg-zinc-900/50 cursor-pointer'
                        >
                          <div className='relative w-full h-32'>
                            <Image
                              src={item.imgSrc}
                              alt={item.imgAlt}
                              layout='fill'
                              objectFit='cover'
                            />
                          </div>
                          <span className='absolute top-[116px] right-4 w-6 h-6 transition border border-white text-zinc-600 rounded-full bg-white group-hover:text-brand-600'>
                            <FaSteam size={22} />
                          </span>
                          <div className='ml-4 px-2 py-4 flex-1 flex flex-row justify-between items-end'>
                            <div>
                              <p className='text-sm  text-gray-400'>
                                {item.name}
                              </p>
                              <div className='flex gap-2 mt-2'>
                                {item.genres.map((genre) => {
                                  return (
                                    <Tag
                                      key={genre.label}
                                      accentClasses={item.accentClasses}
                                    >
                                      {genre.label}
                                    </Tag>
                                  );
                                })}
                              </div>
                            </div>
                            <div className='flex'>
                              {publishers.map((company) => (
                                <div key={company.href} className='flow-root'>
                                  <a
                                    href={company.href}
                                    target='_blank'
                                    rel='noreferrer'
                                  >
                                    <button className='gap-x-2 items-center transition hover:bg-black'>
                                      <div className='relative h-8 w-12'>
                                        <Image
                                          src={company.logo}
                                          alt={company.alt}
                                          layout='fill'
                                          objectFit='contain'
                                        />
                                      </div>
                                    </button>
                                  </a>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className='mt-8 text-base'>
                    <a
                      href='#'
                      className=' text-brand-600 hover:text-brand-500'
                    >
                      {' '}
                      View all games <span aria-hidden='true'>&rarr;</span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='grid grid-cols-2 gap-4'>
                <a href='#'>Blog</a>
                <a href='#'>Steam</a>
                <a href='#'>YouTube</a>
                <a href='#'>Contact</a>
                <a href='#'>Press</a>
              </div>
              <div className='mt-6 flex flex-col w-full gap-4 md:ml-12'>
                <button
                  disabled
                  className='bg-brand-600 rounded-lg py-2 disabled:cursor-not-allowed'
                >
                  Sign up
                </button>
                <button
                  disabled
                  className='py-2 rounded-lg disabled:cursor-not-allowed'
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        )}
      </Popover.Panel>
    </Transition>
  );
};

export const Navbar = () => {
  return (
    <Popover className='relative max-h-25 h-full bg-black border-b border-zinc-900'>
      <div
        className='absolute inset-0 shadow z-30 pointer-events-none'
        aria-hidden='true'
      />
      <div className='relative z-20'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10'>
          <div>
            <Link href='/'>
              <div className='flex'>
                <span className='sr-only'>Smidge Games</span>
                <div className='relative w-32 h-16'>
                  <Image
                    src='/images/smidge-games/smidge-games-logo-orange.png'
                    alt='Smidge Games logo'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-200 hover:text-brand-600 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500'>
              <span className='sr-only'>Open menu</span>
              <MenuIcon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>
          <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
            <Popover.Group as='nav' className='flex space-x-10'>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-brand-600' : 'text-zinc-400',
                        'group px-2 py-1 bg-black rounded-md inline-flex items-center text-base  focus:ring-brand-500 focus:border-brand-500 focus:outline-none focus:ring-2'
                      )}
                    >
                      <span className='uppercase'>Games</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-brand-600' : 'text-zinc-400',
                          'ml-2 h-5 w-5 group-hover:text-brand-600'
                        )}
                        aria-hidden='true'
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 -translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 -translate-y-1'
                    >
                      <Popover.Panel className='hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-black'>
                        {({ close }) => (
                          <>
                            <div className='max-w-7xl mx-auto grid gap-y-6 px-4 py-6 md:grid-cols-2 md:gap-8 md:px-6 md:py-8 lg:grid-cols-3 lg:px-8 lg:py-12 xl:py-16'>
                              {games.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <div
                                    onClick={() => close()}
                                    className='relative group transition -m-3 flex flex-col justify-between rounded-lg overflow-hidden bg-zinc-900/30 border border-zinc-900/50  hover:bg-zinc-900/50 cursor-pointer'
                                  >
                                    <div className='flex md:h-full md:flex-col'>
                                      <div className='relative w-full h-32'>
                                        <Image
                                          src={item.imgSrc}
                                          alt={item.imgAlt}
                                          layout='fill'
                                          objectFit='cover'
                                        />
                                      </div>
                                      <span className='absolute top-[116px] right-4 w-6 h-6 transition border border-white text-zinc-600 rounded-full bg-white group-hover:text-brand-600'>
                                        <FaSteam size={22} />
                                      </span>
                                      <div className='ml-4 px-2 py-4 md:flex-1 md:flex flex-row justify-between items-end'>
                                        <div>
                                          <p className='text-sm  text-gray-400'>
                                            {item.name}
                                          </p>
                                          <div className='flex gap-2 mt-2'>
                                            {item.genres.map((genre) => {
                                              return (
                                                <Tag
                                                  key={genre.label}
                                                  accentClasses={
                                                    item.accentClasses
                                                  }
                                                >
                                                  {genre.label}
                                                </Tag>
                                              );
                                            })}
                                          </div>
                                        </div>
                                        <div className='flex'>
                                          {publishers.map((company) => (
                                            <div
                                              key={company.href}
                                              className='flow-root'
                                            >
                                              <a
                                                href={company.href}
                                                target='_blank'
                                                rel='noreferrer'
                                              >
                                                <button className='gap-x-2 items-center transition hover:bg-black'>
                                                  <div className='relative h-8 w-12'>
                                                    <Image
                                                      src={company.logo}
                                                      alt={company.alt}
                                                      layout='fill'
                                                      objectFit='contain'
                                                    />
                                                  </div>
                                                </button>
                                              </a>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className='flex justify-between items-center w-full bg-zinc-900'>
                              <div className='space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8'>
                                {callsToAction.map((item) => (
                                  <div key={item.href} className='flow-root'>
                                    <a
                                      href={item.href}
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                      <button className='group gap-x-2 flex items-center h-12 rounded-lg p-2 bg-brand-600 transition hover:bg-brand-500'>
                                        <item.icon
                                          className='flex-shrink-0 text-zinc-900'
                                          aria-hidden='true'
                                        />
                                        <span className='text-white uppercase'>
                                          {item.name}
                                        </span>
                                      </button>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a href='#' className='text-base  hover:text-brand-600 '>
                About
              </a>
              <a href='/contact' className='text-base  hover:text-brand-600'>
                Contact
              </a>
            </Popover.Group>
            <div className='flex items-center gap-4 md:ml-12'>
              <Button variant='ghost' disabled>
                Sign in
              </Button>
              <Button disabled>Sign up</Button>
            </div>
          </div>
        </div>
      </div>
      <MobileNav />
    </Popover>
  );
};

export default Navbar;
