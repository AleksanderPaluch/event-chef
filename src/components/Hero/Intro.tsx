

import React from "react";

const process = [
  { label: "Live cooking", id: "Live" },
  { label: "Interaktywne warsztaty", id: "Masterclass" },
  { label: "Ekskluzywne omakase", id: "Omakase" },
];

export const Intro = () => {

 
  return (
    <div className="py-0 my-0 section">
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

