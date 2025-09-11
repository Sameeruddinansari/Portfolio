import { useEffect } from "react";
import gsap from "gsap";
import "./Loader.css";

const Loader = () => {
  useEffect(() => {
    let tl = gsap.timeline();
    let counter = { value: 0 };
    gsap.to(counter, {
      value: 100,
      duration: 4,
      ease: "none",
      onUpdate: () => {
        const counterEl = document.querySelector(".loader-counter");
        if (counterEl) {
          counterEl.textContent = `${Math.floor(counter.value)} - 100`;
        }
      },
    });
    tl.fromTo(
      ".loader-line",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.4, duration: 0.8, ease: "power3.out" }
    );

    tl.to("#loader", {
      opacity: 0,
      duration: 1,
      delay: 1,
      onComplete: () => {
        const loaderEl = document.getElementById("loader");
        if (loaderEl) loaderEl.style.display = "none";
      },
    });

    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      gsap.to(star, {
        x: gsap.utils.random(-50, 50, true),
        y: gsap.utils.random(-100, -300, true),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(star, {
        opacity: gsap.utils.random(0.2, 1),
        duration: gsap.utils.random(0.5, 1.5),
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (e.clientX - innerWidth / 2) / 50;
      const moveY = (e.clientY - innerHeight / 2) / 50;

      gsap.to(".stars", {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="loader">
      <div className="stars">
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></span>
        ))}
      </div>

      {/* Loader Content */}
      <div className="loader-content">
        <div className="first-line">
          <span className="loader-counter">0 - 100</span>
          <span className="loader-small">YOUR</span>
        </div>
        <div className="loader-line mid-text">WORK EXPERIENCES</div>
        <div className="loader-line big-text">
          IS LOADING RIGHT <span className="now-text">NOW</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
