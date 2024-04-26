import Image from 'next/image';

import { Button } from '@bigcommerce/components/button';
import {
  Slideshow,
  SlideshowAutoplayControl,
  SlideshowContent,
  SlideshowControls,
  SlideshowNextIndicator,
  SlideshowPagination,
  SlideshowPreviousIndicator,
  SlideshowSlide,
} from '@bigcommerce/components/slideshow';

import SlideshowBG from './slideshow-bg-01.jpg';

interface Slide {
  title?: string;
  description?: string;
  ctaText?: string;
}

interface Props {
  slides?: Slide[];
}

const defaultSlides = [
  {
    title: '10% Off Sale',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ctaText: 'Shop now',
  },
  {
    title: '25% Off Sale',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ctaText: 'Shop now',
  },
  {
    title: '25% Off Sale',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    ctaText: 'Shop now',
  },
];

export const Hero = ({ slides = defaultSlides }: Props) => {
  return (
    <Slideshow className="w-full">
      <SlideshowContent>
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <SlideshowSlide key={index}>
              <div className="relative">
                <Image
                  alt="an assortment of brandless products against a blank background"
                  className="absolute -z-10 object-cover"
                  fill
                  priority
                  src={SlideshowBG}
                />
                <div className="flex flex-col gap-4 px-12 pb-48 pt-36">
                  <h2 className="text-5xl font-black lg:text-6xl">{slide.title}</h2>
                  <p className="max-w-xl">{slide.description}</p>
                  <Button asChild className="w-fit">
                    <a href="/#">{slide.ctaText}</a>
                  </Button>
                </div>
              </div>
            </SlideshowSlide>
          ))
        ) : (
          <div>No Slides here</div>
        )}
      </SlideshowContent>
      <SlideshowControls>
        <SlideshowAutoplayControl />
        <SlideshowPreviousIndicator />
        <SlideshowPagination />
        <SlideshowNextIndicator />
      </SlideshowControls>
    </Slideshow>
  );
};
