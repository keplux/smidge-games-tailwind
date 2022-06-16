import { FaSteam } from '@react-icons/all-files/fa/FaSteam';
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props: any) => <FaFacebook size={20} />,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props: any) => <FaInstagram size={20} />,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props: any) => <FaTwitter size={20} />,
  },
  {
    name: 'Steam',
    href: '#',
    icon: (props: any) => <FaSteam size={20} />,
  },
];

export const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-brand-600'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-center text-sm text-gray-400'>
            &copy; 2022 Smidge Games. Designed & Developed by Keplux
            Development.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
