import Image from 'next/image';

export const ProfilePic = () => (
  <Image
    className='bg-dark'
    src="/images/profilefull.png" // Route of the image file
    height={272} // Desired size with correct aspect ratio
    width={256} // Desired size with correct aspect ratio
    alt="profilepic"
    style={{
      borderRadius: '30%',
    }}
  />
);