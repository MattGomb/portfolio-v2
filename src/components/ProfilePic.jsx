import Image from 'next/image';

export const ProfilePic = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={240} // Desired size with correct aspect ratio
    width={256} // Desired size with correct aspect ratio
    alt="profilepic"
    style={{ borderRadius: '50%' }}
  />
);