import { ContactForm } from "../components/ContactForm/ContactForm";
import { Hero } from "../components/Hero/Hero";
import { Intro } from "../components/Intro/Intro";
import { Offer } from "../components/Offer/Offer";


export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Offer />
      <ContactForm />
    </>
  );
}