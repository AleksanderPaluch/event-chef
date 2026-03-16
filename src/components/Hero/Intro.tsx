

import React from "react";

const process = [
  { label: "Live cooking", id: "Live" },
  { label: "Interaktywne warsztaty", id: "Masterclass" },
  { label: "Ekskluzywne omakase", id: "Omakase" },
];

export const Intro = () => {

  const smoothScroll = (targetY: number, duration = 1800) => {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;

      const percent = Math.min(progress / duration, 1);

      // easing (cubic)
      const ease = 1 - Math.pow(1 - percent, 3);

      window.scrollTo(0, startY + diff * ease);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    const y = section.getBoundingClientRect().top + window.scrollY;

    smoothScroll(y, 1400); // тут контролюєш швидкість
  };

  return (
    <div className=" section">
      <div className="max-w-5xl mx-auto text-center">
        
        <h2 className="section-header">
          Sushi jako część <br /> Twojego wydarzenia
        </h2>

      <p className="section-comment"> Możesz wybrać formułę dopasowaną do charakteru wydarzenia: </p>

        <div className="section-process">
          {process.map((step, index) => (
            <React.Fragment key={step.id}>
              <a
                href={`#${step.id}`}
                onClick={(e) => handleScroll(e, step.id)}
                className="transition-opacity cursor-pointer hover:opacity-80"
              >
                {step.label}
              </a>

              {index < process.length - 1 && (
                <span className="opacity-40">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="mb-0 section-comment">
          Przyjeżdżamy na miejsce, przygotowujemy stanowisko i serwujemy świeże
          sushi na oczach Twoich gości. Wybierz formę doświadczenia najlepiej
          dopasowaną do charakteru wydarzenia.
        </p>

      </div>
    </div>
  );
};

