import Hero from "../components/Hero.jsx";
import Beyond from "../components/Beyond.jsx";
import Notice from "../components/Notice.jsx";
import WhatWeOffer from "../components/WhatWeOffer.jsx";
import Problem from "../components/Problem.jsx";
import OurProcess from "../components/Ourprocess.jsx";
import CaseStudies from "../components/CaseStudies.jsx";
import Work from "../components/Work.jsx";
import FAQ from "../components/FAQ.jsx";
import Form from "../components/Form.jsx";
import { lazy, Suspense, useEffect } from "react";
 
const Client = lazy(() => import("../components/Client.jsx"));
 
export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash;
      const el = document.querySelector(id);
      if (el) {
        setTimeout(() => {
          const headerEl = document.querySelector("header");
          const headerHeight = headerEl ? headerEl.offsetHeight : 80;
          const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top, behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  return (
    <>
      <div aria-hidden="true" className="h-20 md:h-24" />
      <Hero />
      <section id="beyond">
        <Beyond />
      </section>
      <section id="notice">
        <Notice />
      </section>
      <section id="services">
        <WhatWeOffer />
      </section>
      <section id="about-us">
        <Problem />
      </section>
      <section id="process">
        <OurProcess />
      </section>
      <section id="case-studies">
        <CaseStudies />
      </section>
      <section id="work">
        <Work />
      </section>
      <Suspense fallback={<div className="text-white text-center py-20">Loading testimonials...</div>}>
        <section id="testimonials">
          <Client />
        </section>
      </Suspense>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Form />
      </section>
    </>
  );
}
