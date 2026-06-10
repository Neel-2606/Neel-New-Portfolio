import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-6">
        <img src={images[0]} alt="Screenshot" className="w-full h-auto object-cover" />
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-6 group">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((src, index) => (
            <div className="relative flex-[0_0_100%] min-w-0" key={index}>
              <img src={src} alt={`Screenshot ${index + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/80 hover:scale-110 transition opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/80 hover:scale-110 transition opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
        <div className="px-3 py-2 rounded-full bg-black/40 backdrop-blur-md flex items-center gap-2 border border-white/10 shadow-xl">
          {images.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex
                  ? "w-6 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  : "w-1.5 h-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
