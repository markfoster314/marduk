import { Box } from "@/components/Box/Box";
import { Button } from "@/components/Button/Button";
import { CSSProperties, useState, useEffect } from "react";
import { CarouselProps } from "./Carousel.types";
import "./Carousel.css";

export const Carousel = ({
  items,
  autoPlay = false,
  interval = 3000,
  showControls = true,
  showIndicators = true,
  ...props
}: CarouselProps & { style?: CSSProperties }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
    return undefined;
  }, [autoPlay, interval, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  if (items.length === 0) return null;

  return (
    <Box className="marduk-carousel" {...props}>
      <Box className="marduk-carousel-container">
        {items.map((item, index) => (
          <Box
            key={index}
            className={`marduk-carousel-slide ${index === currentIndex ? "marduk-carousel-slide--active" : ""}`}
          >
            {item}
          </Box>
        ))}
      </Box>
      {showControls && items.length > 1 && (
        <>
          <Button
            className="marduk-carousel-control marduk-carousel-control--prev"
            onClick={goToPrevious}
          >
            ‹
          </Button>
          <Button
            className="marduk-carousel-control marduk-carousel-control--next"
            onClick={goToNext}
          >
            ›
          </Button>
        </>
      )}
      {showIndicators && items.length > 1 && (
        <Box className="marduk-carousel-indicators">
          {items.map((_, index) => (
            <Box
              key={index}
              className={`marduk-carousel-indicator ${index === currentIndex ? "marduk-carousel-indicator--active" : ""}`}
              onClick={() => goToSlide(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
