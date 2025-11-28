import HeroCarouselClient from "./HeroCarousel.client";

export default function HeroCarousel() {
  // Server wrapper: render the interactive client component.
  // Keeps the component usable in server components while preserving interactivity.
  return <HeroCarouselClient />;
}
