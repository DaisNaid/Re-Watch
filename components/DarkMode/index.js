import Image from "next/image";
import { useEffect, useState } from 'react';
import stars from '../../assets/images/stars.png';
import moon from '../../assets/images/moon.png';
import sun from '../../assets/images/sun.jpeg';
import dark from '../../constants/DarkMode';
import light from '../../constants/LightMode';

export default function DarkMode() {
    const [isDark, setIsDark] = useState(true);
    const [star, setStar] = useState(moon);

    useEffect(() => {
        if(isDark === true) {
            const main_bg = document.getElementById('main-bg');
            const stars = document.getElementById('stars');
            const star = document.getElementById('star');
            main_bg.className = dark.main_bg;
            stars.className = dark.stars;
            setStar(moon);
            star.className = dark.star;
        }
        else {
            const main_bg = document.getElementById('main-bg');
            const stars = document.getElementById('stars');
            const star = document.getElementById('star');
            main_bg.className = light.main_bg;
            stars.className = light.stars;
            setStar(sun);
            star.className = light.star;
        }

      const motion = async () => {
        let stars = document.getElementById('stars');
        let star = document.getElementById('star');
        window.addEventListener('scroll', function () {
          let value = window.scrollY;
          stars.style.left = value * 0.25 + 'px';
          star.style.top = value * 1.05 + 'px';
        });
      }
      motion();
    }, [isDark, star]);
  
    return (
      <div id="main-bg">
          <header className="p-4 overflow-hidden h-[70vh]">
            <h1 className="text-center font-bold text-3xl text-zinc shadow-md">
              Re-Watch
            </h1>
            <p className="text-center text-zinc pt-6 animate-glow">
              Never miss a likely favorite!
            </p>
            <section className="section relative max-w-full max-h-full p-20">
              <Image
                id="stars"
                alt="stars"
                src={stars}
              />
              <Image
                id="star"
                alt="star"
                src={star}
                onClick={() => setIsDark(!isDark)}
              />
            </section>
          </header>
          <main className="min-h-screen">
          </main>
          <footer className="font-bold text-white text-center p-4">
            &copy; 2022 Re-Watch
          </footer>
      </div>
    );
  }