import Image from 'next/image';

export const ProfilePic = () => (
  <Image
    className='bg-dark'
    src="/images/profilehqfinal.png" // Route of the image file
    height={426} // Desired size with correct aspect ratio
    width={402} // Desired size with correct aspect ratio
    alt="profilepic"
  />
);