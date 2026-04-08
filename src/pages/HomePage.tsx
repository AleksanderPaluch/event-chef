import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Hero } from "../components/Hero/Hero";
import { Intro } from "../components/Intro/Intro";
import { Offer } from "../components/Offer/Offer";
import { smoothScrollTo } from "../components/helpers";




export default function HomePage() {

useEffect(() => {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    setTimeout(() => {
      smoothScrollTo(hash);
    }, 100);
  }
}, []);



  return (
    <>
      <Hero />
      <Intro />
      <Offer />
      <ContactForm />
    </>
  );
}