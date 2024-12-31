import { useState, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const UseNavbarVisibility = (footerRef: React.RefObject<any>) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerBottom = footerRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (footerBottom <= windowHeight) {
          setShowNavbar(false);
        } else {
          setShowNavbar(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [footerRef]);

  return { showNavbar };
};

export default UseNavbarVisibility;
