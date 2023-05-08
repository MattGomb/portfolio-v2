import Image from 'next/image';

export const ProfilePic = () => (
  <Image
    className='bg-dark'
    src="/images/profilehqfinal.png" // Route of the image file
    height={413} // Desired size with correct aspect ratio
    width={390} // Desired size with correct aspect ratio
    alt="profilepic"
  />
);