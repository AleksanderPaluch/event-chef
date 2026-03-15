import React from "react"

const process = [
  "Live cooking",
  "Interaktywne Warsztaty",
  "Ekskluzywne Omakase",
]

export const Intro = () => {
  return (
  <div
 
        className="relative py-32 "
      >
        <div className="max-w-3xl px-6 mx-auto text-center">
 

          <p className="section-comment">
            Tworzymy wyjątkowe doświadczenia kulinarne w Twojej przestrzeni.
            Przyjeżdżamy na miejsce, przygotowujemy stanowisko i na oczach gości
            serwujemy świeże, autorskie sushi.
          </p>

              <div className=" section-process">
                  {process?.map((step, index) => (
                    <React.Fragment key={index}>
                      {" "}
                      <span>{step}</span>{" "}
                      {index < process.length - 1 && <span>•</span>}{" "}
                    </React.Fragment>
                  ))}
                </div>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            Możesz wybrać formułę dopasowaną do charakteru wydarzenia —
            live cooking, interaktywny masterclass lub ekskluzywne omakase.
          </p>
        </div>
      </div>
  )
}
