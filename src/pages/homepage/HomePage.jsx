import Link from 'next/link';
import { Welcome } from '@/components/welcome';
import { Projects } from '@/components/Projects';
import { Recommendations } from '@/components/Recommendations';
import { About } from '@/components/AboutMe';
import { Contact } from '@/components/ContactMe';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Projects />
      <Recommendations />
      <About />
      <Contact />
      <Footer />
    </>
  );
}