import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Certification from '@/components/sections/Certification';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';

// Component หน้า Landing Page หลัก
export default function Home() {
  return (
    <>
      {/* แสดงผลทุก sections ของ portfolio แบบหน้าเดียว */}
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certification />
      <Portfolio />
      <Contact />
    </>
  );
}
